const User=require('../models/user');
const base64Id = require('base64id');
const bcrypt= require('bcrypt');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const Strings = require('../utils/strings');
const UserNotificationSetting= require('../models/UserNotificationSetting');
const userNotificationData = require('../utils/userNotification');
const { data } = require('../utils/userNotification');
const Encrypt = require('../utils/Encryption');
const Decrypt = require('../utils/Decryption');
const awsSes = require("../utils/aws-ses");
const helper=require('../utils/helpers');
const sequelize=require('../utils/database');
const { OtpEmail } = require("./EmailTemplate");
const { ResetPwd } = require("./EmailTemplate")


exports.signUp=async (req,res,next)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailID= req.body.email;
    const password=req.body.password;
    const fullName = firstName+" "+lastName
    const salt = await bcrypt.genSalt(10);
    const cipherFullName=await Encrypt.encryption(fullName);
    const cipherFirstName = await Encrypt.encryption(firstName);
    const cipherLastName = await Encrypt.encryption(lastName);
    const hashPassword = await bcrypt.hash(password,salt);

    User.findOne({where:{emailID:emailID,}})
        .then(async user=>{
        if(user){
            return res.status(403).json({status:1,message:'An account with this email address already exists, please use another email address or reset your password.'});
        }else{
            User.create({uid:base64Id.generateId(),fullName:cipherFullName,emailID:emailID,password:hashPassword,emailverifylink:'',isEmailverified:false,firstName:cipherFirstName,lastName:cipherLastName})
                .then(async data=>{
                if(data){
                    return res.status(200).json({status:1,message:'Account created successfully! Please check your email for a code to varify your new account'});
                }else{
                    return res.status(403).json({status:1,message:'Unable to create user'});
                }
            }).catch(err=>{
                console.log(err);
                return res.status(500).json({status:0,msg:'Problem Creating the user'});
            });   
        }
    }).catch(err=>{
        console.log(err);
        return res.status(500).json({status:0,message:'something went wrong'});
    });
}

exports.signIn=async(req,res,next)=>{
    const email =  req.body.email;
    const password =  req.body.password;
    const OTP = Strings.otp();
    const salt = await bcrypt.genSalt(10);
    const bCryptOtp = await bcrypt.hash(OTP+"",salt);

    if(email==''&&password==''){
        return res.status(200).json({status:1,message:'please fill required fields'});
    }
    const user = await User.findOne({where:{emailID:email,isBlocked:true}});
    if(user){
        return res.status(403).json({status:0,msg:'Your account has been blocked due to Incorrect logIn attempt'});
    }

    User.findOne({where:{emailID:email,isActive:true,isBlocked:false}})
        .then(async loginResult=>{
            if(loginResult){
                loginResult.otp=bCryptOtp;
                loginResult.save();
                if(loginResult.loginAttempt<=5){
                    let passwordIsValid=await bcrypt.compareSync(password,loginResult.password);
                    if(passwordIsValid){
                        loginResult.loginAttempt = 0;
                        await loginResult.save();
                        // const html="<h1>" + "Your otp to login into thea : " + OTP+ "</h1>";
                        const html = OtpEmail(OTP)
                        awsSes.sendMail(
                            [email],
                            [],
                            "Your security code for Thea login",
                            html,
                            `Your OTP to login thea is ${OTP}`,
                            "noreply@theabook.com",
                            "noreply@theabook.com"
                        )
                        .then((resp) => {
                            console.log(resp);
                            return res.status(200).json({status:1,msg:'OTP sent successfully'});
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    }else{
                        let count = 1;
                        loginResult.loginAttempt+= count;
                        await loginResult.save();
                        return res.status(403).json({status:1,msg:"Email or password is incorrect, please try again."});
                    }
                }else{
                    loginResult.isBlocked = true;
                    await loginResult.save();
                    return res.status(403).json({status:0,msg:"Multiple Incorrect login attempt in a row",accountBlocked:true});
                }
            }else{
                return res.status(403).json({status:1,msg:"user doesn't exist"});
            }
        })
        .catch(err=>{
            console.log(err);
            return res.status(500).json({status:0,msg:'something went wrong'});
        });
}

exports.otpVerify=async(req,res,next)=>{
    const otp=req.body.otp;
    const emailID=req.body.email;
    User.findOne({where:{emailID:emailID,isActive:true}})
        .then(async result=>{
            if(result){
                if(result.userRole=='user'){
                    let otpCompare = await bcrypt.compareSync(otp,result.otp);
                if(otpCompare){
                    var userKey=process.env.USERKEY;
                    let token=jwt.sign(
                    {
                        userId:result.uid,
                        email:result.emailID
                    },
                    userKey,
                    {
                        expiresIn:"720h"
                    }
                 );
                    return res.status(200).json({status:1,msg:'otp matched successfully! user loggedIn',authToken:token,data:result});
                }else{
                    return res.status(403).json({status:1,msg:'Invalid code, please try again or request a new code.'});
                }
            }else{
                let OtpCompare = await bcrypt.compareSync(otp,result.otp);
                if(OtpCompare){
                    var adminKey = process.env.adminKEY;
                    let token = jwt.sign(
                        {
                            adminId:result.uid,
                            emailID:result.emailID
                        },
                        adminKey,
                        {
                            expiresIn:"720h"
                        }
                    );
                    return res.status(200).json({status:1,msg:'otp matched successfully! Admin loggedIn',authToken:token});
                }else{
                    return res.status(200).json({status:1,msg:'Please enter correct otp'});
                }
            }    
            }else{
                return res.status(403).json({status:1,msg:'user not found'});
            }
        }).catch(err=>{
            console.log(err);
            return res.status(500).json({status:1,msg:'Something went wrong'});
        });
}

exports.forgotPassword=async(req,res,next)=>{
    const OTP=Strings.otp();
    const emailID = req.body.email;

    const salt = await bcrypt.genSalt(10);
    
    const hashOtp = await bcrypt.hash(OTP+"",salt);

    
    User.findOne({where:{emailID:emailID}})
        .then(async userData=>{
            
            try {
                if(userData){
                    userData.otp=hashOtp;
                    let reset_token=Strings.randomC(12);
                    console.log(reset_token)
                    if(reset_token===null) throw new Error('Could not generate Reset Token');
                    userData.resetToken=reset_token;
                    userData.tokenExpires=Date.now()+600000 //1 hour; 
                      userData.save();
                    // const html="<h2>" + "Your link to reset password for your thea account : " + `https://new.theabook.com/ResetPassword/${reset_token}`+ "</h2>";                    
                        const html = ResetPwd(reset_token)
                            awsSes.sendMail(
                                [emailID],
                                [],
                                "Password Reset Request for your Thea Account",
                                html,
                                `Your link to reset your thea account thea is ${process.env.URL}ResetPassword/${reset_token}`
                                ,
                                "noreply@theabook.com",
                                "noreply@theabook.com"
                            )
                            .then((resp) => {
                                console.log(resp);
                                return res.status(200).json({status:1,msg:'We have received your request, please check your email for a link to reset your password.'});
                            })
                            .catch((err) => {
                                return res.status(500).json({status:1,msg:'Email service is not running'});

                            });
                }else return res.status(403).json({status:1,msg:'email ID does not exist'});
            } catch (error) {
                return res.status(500).json({status:1,msg:'something went wrong'});

            }
        }).catch(err=>{
            console.log(err);
            return res.status(500).json({status:1,msg:'something went wrong'});
        });
}

exports.resetPassword= async(req,res,next)=>{
    
    const token=req.body.token;
    const newPassword = req.body.newpassword;
    //creates a salt
    const salt = await bcrypt.genSalt(10);
    // and hashes the new password with the salt.
    const hashNewPassword = await bcrypt.hash(newPassword,salt);
    
    User.findOne({where:{resetToken:token}})
        .then(result=>{
            if(result){
               let inRange=helper.compareDate(new Date(),result.tokenExpires)
                if(inRange){
                    result.resetToken=null;
                    result.tokenExpires=null;
                    result.password=hashNewPassword
                    result.save();

                    return res.status(200).json({status:1,msg:'Password successfully updated! Please use this password the next time you sign inPassword successfully updated! Please use this password the next time you sign in'});
                }else{
                    return res.status(403).json({status:1,msg:' You request has expired. Please raise a another request.'});
                }
            }else{
                return res.status(403).json({status:1,msg:'Could not find the reset Request.Please request another one'});   
            }
        })
        .catch(err=>{
            console.log(err);
            return res.status(500).json({status:1,msg:'something went wrong'});
        });
}

exports.resendOtp=async(req,res,next)=>{
    const emailID = req.body.email;
    const OTP = Strings.otp();
    console.log(OTP);
    const salt = await bcrypt.genSalt(10);
    const hashOtp=await bcrypt.hash(OTP+"",salt);
    User.findOne({where:{emailID:emailID}})
        .then(async userData=>{
            if(userData){
                userData.otp=hashOtp;
                await userData.save();
                const html=OtpEmail(OTP);
                        awsSes.sendMail(
                            [emailID],
                            [],
                            "Your security code for Thea login",
                            html,
                            `Your OTP to login thea is ${OTP}`,
                            "noreply@theabook.com",
                            
                        )
                        .then((resp) => {
                            console.log(resp);
                            return res.status(200).json({status:1,msg:'Please check your email for a new verification code.'});
                        })
                        .catch((err) => {
                            console.log(err)
                            return res.status(500).json({status:1,msg:err.message});
                        });
            }else{
                return res.status(403).json({status:1,msg:'User not found'});
            }
        })
        .catch(err=>{
            console.log(err);
            return res.status(500).json({status:1,msg:'Something went wrong'});
        });
}   
exports.userBasicInformation=async(req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const phone = req.body.phone;
    const street = req.body.street;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const country = req.body.country;
    const fullName = firstName+" "+lastName;
    
    const cipherFirstName= await Encrypt.encryption(firstName);
    const cipherLastName = await Encrypt.encryption(lastName);
    const cipherPhone = await Encrypt.encryption(phone);
    const cipherStreet = await Encrypt.encryption(street);
    const cipherCity = await Encrypt.encryption(city);
    const cipherState = await Encrypt.encryption(state);
    const cipherZip = await Encrypt.encryption(zip);
    const cipherCountry = await Encrypt.encryption(country);
    const cipherFullName = await Encrypt.encryption(fullName);

    User.findOne({where:{uid:req.userId}})
        .then(async userData=>{
            if(userData){
                userData.firstName=cipherFirstName;
                userData.lastName=cipherLastName;
                userData.phone=cipherPhone;
                userData.street=cipherStreet;
                userData.city=cipherCity;
                userData.state=cipherState;
                userData.zip=cipherZip;
                userData.country=cipherCountry;
                userData.fullName=cipherFullName;
                await userData.save();
                return res.status(200).json({status:1,msg:'Profile updated successfully'});
            }else{
                return res.status(403).json({status:1,msg:'user does not exist'});
            }
        })
        .catch(err=>{
            return res.status(500).json({status:0,msg:'Something went wrong'});
        });
}
exports.changeUserEmail=async(req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    // const emailID= req.body.email;

   let userExist= await User.findOne({where:{emailID:req.body.email}})

   if(userExist)  return res.status(400).json({status:1,msg:'Cannot Change Email',data:[]})
  else{
    User.findOne({where:{uid:req.userId}})
    .then(async userData=>{
        if(userData){
            userData.emailID=req.body.email;
            await userData.save()
            return res.status(200).json({status:1,msg:'Email Changed successfully',data:userData.emailID});
        }else{
            return res.status(403).json({status:0,msg:'user not found'});
        }
    }).catch(err=>{
        console.log(err);
        return res.status(500).json({status:0,msg:'something went wrong'});
    });
  }
}

exports.changePassword=async(req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    const currentPassword = req.body.currentpassword;
    const newPassword = req.body.newpassword;
    const salt = await bcrypt.genSalt(10);
    const hashNewPassword = await bcrypt.hash(newPassword,salt);

    User.findOne({where:{uid:req.userId}})
        .then(async userData=>{
            if(userData){
                let validPassword = bcrypt.compareSync(currentPassword,userData.password);
                if(validPassword){
                    userData.password=hashNewPassword;
                    await userData.save();
                    return res.status(200).json({status:1,msg:'password changed successfully'});
                }else{
                    return res.status(403).json({status:1,msg:'password did not matched'});
                }
            }else{
                return res.status(403).json({status:1,msg:'User data not found'});
            }
        })
        .catch(err=>{
            return res.status(500).json({status:0,msg:'something went wrong'});
        });
}

exports.notificationSettingsInsert=async (req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    UserNotificationSetting.findAll({where:{userUid:req.userId}})
        .then(async data=>{
            if(data.length>0){  
                return res.status(200).json({status:1,msg:'User Notification Already Exist'})
            }else{
                const notificationDataCreation = userNotificationData.data.map(async data=>{
                    const userNotificationData = await UserNotificationSetting.create({
                        uid:base64Id.generateId(),
                        type:data.type,
                        email:data.email,
                        inApp:data.inApp,
                        userUid:req.userId
                    })
                    return userNotificationData;
                 }); 
                 Promise.all(notificationDataCreation).then(result=>{
                     return res.status(200).json({status:1,msg:'data Applied',data:result})
                 }).catch(err=>{
                     console.log(err);
                     return res.status(200).json({status:0,msg:'Promise not returned'});
                 });
            }
        }).catch(err=>{
            console.log(err);
            res.status(500).json({status:0,msg:'Something went wrong'});
        });
}

exports.notificationSettingChange=async(req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    const notificationData = req.body.data;
    const allData=notificationData.map(async data=>{
        const allNotificationData= await UserNotificationSetting.findOne({where:{type:data.type,userUid:req.userId}});
        allNotificationData.email=data.email;
        allNotificationData.inApp=data.inApp;
        await allNotificationData.save();
        return allNotificationData;
    })
    Promise.all(allData).then(result=>{
        return res.status(200).json({status:1,msg:'Notification Setting Applied',data:result});
    }).catch(err=>{
        console.log(err);
        return res.status(200).json({status:1,msg:'something went wrong'});
    });
}

exports.deleteUserProfile=async(req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    const deleteDate = req.body.date;
  let all_deleted=await deleteRecords(req.userId)
  if(all_deleted) res.status(200).json({status:1,msg:'done'});
  else res.status(403).json({status:1,message:'Could not perform Action due to some error'})

    
}

exports.getUserProfileInfo=async(req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    User.findOne({where:{uid:req.userId,isActive:true},attributes:['fullName','createdAt','state','country','city','zip','emailID','phone','street','firstName','lastName','profileImageLink','headerImageLink']})
        .then(async userData=>{
            if(userData){
                const fullName = await Decrypt.decrypt(userData.fullName);
                const createdAt = userData.createdAt;
                const state = await Decrypt.decrypt(userData.state);
                const country =  await Decrypt.decrypt(userData.country);
                const city = await Decrypt.decrypt(userData.city);
                const zip = await Decrypt.decrypt(userData.zip);
                const phone = await Decrypt.decrypt(userData.phone);
                const street = await Decrypt.decrypt(userData.street);
                const firstName = await Decrypt.decrypt(userData.firstName);
                const lastName = await Decrypt.decrypt(userData.lastName);
                const profileImage = await Decrypt.decrypt(userData.profileImageLink);
                const headerImage = await Decrypt.decrypt(userData.headerImageLink);
                const userDataJson = JSON.parse(JSON.stringify(userData));
                delete userDataJson.fullName;
                delete userDataJson.createdAt;
                delete userDataJson.state;
                delete userDataJson.country;
                delete userDataJson.city;
                delete userDataJson.zip;
                delete userDataJson.phone;
                delete userDataJson.street;
                delete userDataJson.firstName;
                delete userDataJson.lastName;
                delete userDataJson.profileImageLink;
                delete userDataJson.headerImageLink;
                userDataJson.name = fullName;
                userDataJson.joined = createdAt;
                userDataJson.state = state;
                userDataJson.country = country;
                userDataJson.city = city;
                userDataJson.zip = zip;
                userDataJson.phone = phone;
                userDataJson.street = street;
                userDataJson.firstName = firstName;
                userDataJson.lastName = lastName;
                userDataJson.profileImage = profileImage;
                userDataJson.headerImage = headerImage;
                return res.status(200).json({status:1,msg:'user profile',data:userDataJson});
            }else{
                return res.status(403).json({status:1,msg:'Unable to fetch user Data.Server Problem'});                
            }
        }).catch(err=>{
            console.log(err);
            return res.status(500).json({status:1,msg:'something went wrong'});
        });
}

exports.profileImageUpload = async(req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    const profileImage=req.body.profileImage;
    const profileHeader = req.body.profileHeader;
    const cipherProfileImage = await Encrypt.encryption(profileImage);
    const cipherProfileHeader= await Encrypt.encryption(profileHeader);
    User.findOne({where:{uid:req.userId}})
        .then(async data=>{
            if(data){
                if(profileHeader==null){
                    data.profileImageLink=cipherProfileImage;
                    await data.save();
                    return res.status(200).json({status:1,msg:'Image Uploaded Successfully',data:data});
                }else{
                    data.headerImageLink=cipherProfileHeader;
                    await data.save();
                    return res.status(200).json({status:1,msg:'Image Uploaded Successfully',data:data});
                }
            }
        })
        .catch(err=>{
            console.log(err);
            return res.status(500).json({status:0,msg:'something went wrong'});
        })
}

exports.unBlockUser = async(req,res,next)=>{
  try{
    if (!req.isAuthAdmin) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    const userDetail = await User.findOne({where:{emailID:req.body.email}});
    userDetail.isBlocked = false;
    await userDetail.save();
    return res.status(200).json({status:1,msg:'user Unblocked successfully'});
  }catch(err){
    console.log(err);
    return res.status(500).json({status:0,msg:'Something went wrong'});
  }
}


//deleting records.
async function deleteRecords(userID){


    try {
         await sequelize.query(`delete from "searches" where "userUid"='${userID}'`)
        await sequelize.query(`delete from "requestedCategories" where "userUid"='${userID}'`)
        await sequelize.query(`delete from "userCategories" where "userUid"='${userID}'`)
        await sequelize.query(`delete from "cabinets" where "userUid"='${userID}'`)
        await sequelize.query(`delete from "users" where "uid"='${userID}'`)
        return true;
    } catch (error) {

        console.log(error)
        
        return false;
    }






}




