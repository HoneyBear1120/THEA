const CategoryUtils = require('../utils/Category');
const Categories = require('../models/Categories');
const base64id = require('base64id');
const userCategories = require('../models/UserCategory');
const Encrypt = require('../utils/Encryption');
const UserCategories = require('../models/UserCategory');
const Encryptor = require('simple-encryptor')(process.env.encryptkey);
const Cabinet=require('../models/cabinet')
const { Op } = require("sequelize");

exports.categoryInsert=async(req,res,next)=>{
    const allCategory=await CategoryUtils.data.map(async categoryData=>{
        console.log(categoryData.category);
            const categoryInsert=Categories.create({
                categoryId:base64id.generateId(),
                name:categoryData.category,
                icon:'',
            });
        return categoryInsert;       
    });
    Promise.all(allCategory).then(async result=>{
        return res.status(200).json({status:1,msg:result})
    }).catch(err=>{
        console.log(err);
        return res.status(500).json({status:0,msg:'something went wrong'});
    }); 
}

exports.categoryDetail = async(req,res,next)=>{
    console.log("categoryDetail", req.custom_updatedAt)
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    const categoryId = req.body.categoryId;
    const title=req.body.formTitle;
    const isPinned = req.body.isPinned;
    const titleFieldType = req.body.titleFieldType;
    const RequestedCategory = req.body.isRequestedCategory;
    const sections= req.body.sections;
    const subTitle = req.body.subTitle;
    const tags =  req.body.tags;
    const capitalTitle = title;
    const custom_updatedAt = new Date();

    // const cipherCapitalTitle = Encryptor.encrypt(capitalTitle);
    // const cipherSections =  Encryptor.encrypt(sections);
    // const cipherSubTitle = Encryptor.encrypt(subTitle);
    let cipherTags 
    if(tags.length>0)cipherTags=tags.trim();
    else cipherTags=null;



    


        Categories.findOne({where:{categoryId:categoryId},attributes:['categoryId']})
        .then(async data=>{   
            userCategories.create({userCategoryId:base64id.generateId(),title:capitalTitle,isPinned:isPinned,titleFieldType:titleFieldType,isRequestedCategory:RequestedCategory,formData:sections,categoryCategoryId:data.categoryId,userUid:req.userId,subTitle:subTitle,tags:cipherTags, custom_updatedAt : custom_updatedAt.toISOString()})
                               .then(async result=>{
                                   if(result){
                                      return res.status(200).json({status:1,msg:'Context Saved Successfully',data:result});
                                   }
                               })
                               .catch(err=>{    
                                   console.log(err);
                                   return res.status(500).json({status:0,msg:'Error ocurred while saving this context'});
                               }); 
        })
        .catch(err=>{
            console.log(err);
            return res.status(500).json({status:0,msg:'Something went wrong'});
        });
    
}

exports.userCategorylist=async(req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }

    const categoryId = req.query.categoryId;
    const userId = req.userId;
    
    userCategories.findAll({where:{categoryCategoryId:categoryId,userUid:userId},attributes:['userCategoryId','title','userUid','categoryCategoryId'],order:[['createdAt','DESC']]})
                  .then(async userData=>{
                    if(userData.length>0){
                        return res.status(200).json({status:1,msg:'User category list by categories',data:userData});
                    }else{
                        return res.status(403).json({status:1,msg:'Data not found'});
                    }
                  }).catch(err=>{
                     console.log(err);
                     return res.status(500).json({status:1,msg:'Something went wrong.Server Timeout'}); 
                  });
}

exports.userTitleRecord = async (req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }

    const userCategoryId = req.query.userCategoryId;
    userCategories.findOne({where:{userCategoryId:userCategoryId,userUid:req.userId},attributes:['userCategoryId','title','formData','isPinned','titleFieldType','categoryCategoryId','isRequestedCategory','createdAt','updatedAt','recently', 'custom_updatedAt']})                
                  .then(async userData=>{
                      if(userData){
                        //   const decipherFormData = await Encryptor.decrypt(userData.formData);
                        //   const decipherTitle = await Encryptor.decrypt(userData.title);
                           const userDataJson = JSON.parse(JSON.stringify(userData));
                          const categoryId  = userData.categoryCategoryId;
                          const categoryIcon = await Categories.findOne({where:{categoryId:userDataJson.categoryCategoryId},attributes:['icon']});
                          delete userDataJson.formData;
                          //delete userDataJson.formTitle;`
                        //  delete userDataJson.title;
                          delete userDataJson.categoryCategoryId;
                          userDataJson.categoryId = categoryId;
                          userDataJson.icon = categoryIcon.icon;
                          userDataJson.formTitle = userData.title
                          userDataJson.sections=userData.formData;
                          userDataJson.recently=new Date()

                            delete userDataJson.title;
                            userData.recently=userDataJson.recently 

                            await userData.save();

                          return res.status(200).json({status:1,msg:'All Data',data:userDataJson});
                      }else{
                          return res.status(403).json({status:1,msg:'Data not found',data:[]});
                      }
                  }).catch(err=>{
                      console.log(err);
                      return res.status(500).json({status:0,msg:'Something went wrong'});
                  });
}

exports.userAllCategoriesList=async (req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }    


   let showRecent=req.query.showRecent?true:false


    userCategories.findAll({where:{userUid:req.userId,isActive:true},attributes:['userUid','userCategoryId','title','isPinned','titleFieldType','categoryCategoryId','subTitle','recently'],order:[[`${showRecent?'recently':'createdAt'}`,`DESC`]]})
                .then(async userData=>{
                    if(userData.length>0){
                        const allUserData = await userData.map(async data=>{
                            const dataJson = JSON.parse(JSON.stringify(data));
                            // const decipherTitle = Encryptor.decrypt(dataJson.title);
                            // const decipherSubTitle = Encryptor.decrypt(dataJson.subTitle);
                            const categoryIcon = await Categories.findOne({where:{categoryId:dataJson.categoryCategoryId},attributes:['name','icon','template_name']});
                            // delete dataJson.title;
                            // delete dataJson.subTitle;
                             dataJson.formTitle = dataJson.title;
                            dataJson.icon = categoryIcon.icon;
                            // dataJson.subTitle = decipherSubTitle;
                            dataJson.categoryName = categoryIcon.name;
                            dataJson.template_name = categoryIcon.template_name;
                            return dataJson;
                        })
                        Promise.all(allUserData).then((result)=>{

                             let sortedData=result.sort((value_one,value_two)=>{
                                if(value_one.title<value_two.title) return -1

                                if(value_one.title>value_two.title) return 1;

                                return 0;
                             })     

                            return res.status(200).json({status:1,msg:'All user Categories',data:sortedData});
                        }).catch(err=>{
                            console.log(err);
                        });
                    }else{
                        return res.status(200).json({status:1,msg:'Data not found',data:result});
                    }
                }).catch(err=>{
                    console.log(err);
                    return res.status(500).json({status:0,msg:'Something went wrong'});
                });
}


exports.usercategoriesListByData = async(req,res,next)=>{   
    if (!req.isAuth){
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }

    userCategories.findAll({where:{userUid:req.userId,isActive:true},attributes:['categoryCategoryId'],group:['categoryCategoryId']}).then(async userData=>{
         
      const allCategoryName = await userData.map(async dt=>{
        
         const categoryName = await Categories.findOne({where:{categoryId:dt.categoryCategoryId},attributes:['name','icon','template_name','categoryId']});        
           return categoryName;
        });


        Promise.all(allCategoryName).then(result=>{
          const resultIs = result.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
          return res.status(200).json({status:1,msg:'All CategoryId',data:resultIs});

        }).catch(err=>{
            console.log(err);
        });



    }).catch(err=>{
        console.log(err);
        return res.status(500).json({status:0,msg:'Something went wrong'});
    });

}


exports.userPinnedCategories = async(req,res,next)=>{
    if (!req.isAuth){
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    UserCategories.findAll({where:{isPinned:true,userUid:req.userId,isActive:true},attributes:['userUid','userCategoryId','title','isPinned','titleFieldType','categoryCategoryId','subTitle']})
                .then(async pinnedData=>{
                    if(pinnedData.length>0){
                        const allPinnedData = await pinnedData.map(async data=>{
                           
                           // const decipherTitle = Encryptor.decrypt(data.title);
                           
                            const pinnedDataJson = JSON.parse(JSON.stringify(data));
                            
                           // const decipherSubTitle = Encryptor.decrypt(pinnedDataJson.subTitle);
                            
                            const categoryIcon = await Categories.findOne({where:{categoryId:pinnedDataJson.categoryCategoryId},attributes:['name','icon','template_name']});
                            
                            
                            //delete pinnedDataJson.title;
                           // delete pinnedDataJson.subTitle;

                            //pinnedDataJson.subTitle = decipherSubTitle;
                            pinnedDataJson.icon = categoryIcon.icon;
                            pinnedDataJson.categoryName = categoryIcon.name;
                            pinnedDataJson.template_name = categoryIcon.template_name;
                           // pinnedDataJson.title = decipherTitle;

                            return pinnedDataJson;
                        })
                        
                        Promise.all(allPinnedData).then(result=>{
                            let sortedData=result.sort((value_one,value_two)=>{
                                if(value_one.title<value_two.title) return -1

                                if(value_one.title>value_two.title) return 1;

                                return 0;
                             })    
                            
                            return res.status(200).json({status:1,msg:'All pinned categories',data:sortedData});
                        }).catch(err=>{
                             
                            console.log(err);
                           return res.status(500).json({status:0, msg:'Error in decrypting',data:[]})
                        });
                    }else{
                        return res.status(200).json({status:1,msg:'No data found',data:[]});
                    }
                }).catch(err=>{
                    console.log(err);
                    return res.status(500).json({status:0,msg:'Something went wrong'})
                });
}


exports.updateUserCategoryListDetail = async(req,res,next)=>{
    if (!req.isAuth){
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
        const sections = req.body.sections;
        const formTitle = req.body.formTitle;
        const subTitle = req.body.subTitle;
        const date = new Date()
        // const cipherFormTitle = Encryptor.encrypt(formTitle);
        // const cipherSections = Encryptor.encrypt(sections);
        // const cipherSubTitle = Encryptor.encrypt(subTitle);
        let active_status= await  userCategories.findOne({where:{userCategoryId:req.body.userCategoryId},attributes:['isActive']})

       // console.log(active_status,'86594845986444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444')

        console.log("date---------------------------------->",date, req)

        const tags=req.body.tags.length>0?req.body.tags:null
        userCategories.update({isPinned:req.body.isPinned,
                            title:formTitle,
                            titleFieldType:req.body.titleFieldType,
                            isRequestedCategory:req.body.isRequestedCategory,
                            formData:sections,
                            subTitle:subTitle,
                            tags:tags?tags.trim():null,
                            isActive:active_status.isActive?active_status.isActive:true,
                            custom_updatedAt: date.toISOString(),
                        },{where:{userCategoryId:req.body.userCategoryId}
                    }).then(async thisUserdata=>{
                        return res.status(200).json({status:1,msg:'Context updated Successfully',data:thisUserdata})
                    }).catch(err=>{
                        console.log(err);
                        return res.status(500).json({status:0,msg:'Something went wrong'});
                    });
}

    
exports.deleteForm = async(req,res,next)=>{
    if (!req.isAuth){
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }
    userCategories.update({isActive:false},{where:{userCategoryId:req.body.userCategoryId}})
                  .then(async thisData=>{
                      return res.status(200).json({status:1,msg:'Form deleted successfully',data:thisData});
                  }).catch(err=>{
                      console.log(err);
                      return res.status(500).json({status:0,msg:'something went wrong'});
                  });
}


exports.userTags =async(req,res,next)=>{
    if (!req.isAuth){
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }

   
    console.log(req.userId)



    userCategories.findAll({where:{userUid:req.userId,isActive:true},attributes:['tags'],group:['tags'],order:[['tags','ASC']],distinct:true})
                  .then(async thisData=>{
                    //  console.log(thisData)

                    if(thisData.length>0){
                        let filteredDate=thisData.filter(function(tags){


                             if(tags.tags) {
                                 if(tags.tags.length>0) return tags;

                             } 
                             
                        })

                        let final_data=SantizeData(filteredDate)
                       

                        return res.status(200).json({status:1,msg:'user tags:',data:final_data});
                        
                    }else{
                        return res.status(403).json({status:1,msg:'No data found',data:[]});
                    }
                  }).catch(err=>{
                      console.log(err)
                      return res.status(500).json({status:1,msg:'Error Occured'});
                  });
} 

exports.userCategoryListByTags = async(req,res,next)=>{
try{
    if(!req.isAuth){
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }

    const arr = [];
    let i= 0;
    const tagName = req.query.tags.trim()
    const userCategoriesList = await userCategories.findAll({where:{userUid:req.userId,isActive:true,[Op.not]:[{
        tags:null
    }]},attributes:['userCategoryId','tags','subTitle','title','categoryCategoryId','isActive']} );
   
    const tagList =  await userCategoriesList.map(async thisList=>{ 
   

        const thisListJson = JSON.parse(JSON.stringify(thisList)); 
         console.log(thisListJson)
         
      //  let tags =  await Encryptor.decrypt(thisList.tags);
   
      //  let subTitle  = await Encryptor.decrypt(thisList.subTitle);
   
      //  let title = await Encryptor.decrypt(thisList.title);
       //delete thisListJson.tags;
      //  delete thisListJson.subTitle;
      // delete thisListJson.title;
       let tag2=thisListJson.tags.trim()
       if(tag2 == tagName||tag2.includes(tagName)){
           console.log(thisListJson)
        // return arr[i++] = {"tags":tags,"title":title,"subTitle":subTitle};
        
        const category = await Categories.findOne({where:{categoryId:thisList.categoryCategoryId},attributes:['name','categoryId','icon','template_name']});
       

        const arrData =  arr.push({"userCategoryId":thisList.userCategoryId,"tags":thisListJson.tags,"title":thisListJson.title,"subTitle":thisListJson.subTitle,"categoryId":category.categoryId,"categoryName":category.name,"icon":category.icon,"template_name":category.template_name,'isActive':thisList.isActive});
       
        return arrData; 
       }
    })
    Promise.all(tagList).then(async result=>{
        return res.status(200).json({status:1,msg:'All tags',data:arr});
    })
}catch(err){
    console.log(err);
    return res.status(500).json({status:0,msg:'Something went wrong'});
}
}


exports.bookmark=async(req,res,next)=>{

try {
    
    let boolValue=req.body.pinned;
    let id=req.body.id;


     let update= await userCategories.update({isPinned:boolValue},{where:{userCategoryId:id}})
     res.status(200).json({status:1,msg:'Entry Updated:',data:update});


} catch (error) {
   console.log(error)

    res.status(500).json({status:0,msg:'Something went wrong'});
}

}

exports.deleted=async (req,res,next)=>{

    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }    


   let showRecent=req.query.showRecent?true:false


    userCategories.findAll({where:{userUid:req.userId,isActive:false},attributes:['userUid','userCategoryId','title','isPinned','titleFieldType','categoryCategoryId','subTitle','recently','isActive'],order:[['updatedAt',`DESC`]]})
                .then(async userData=>{
                    if(userData.length>0){
                        const allUserData = await userData.map(async data=>{
                            const dataJson = JSON.parse(JSON.stringify(data));
                            
                           // const decipherTitle = Encryptor.decrypt(dataJson.title);
                            
                            //const decipherSubTitle = Encryptor.decrypt(dataJson.subTitle);
                            
                            const categoryIcon = await Categories.findOne({where:{categoryId:dataJson.categoryCategoryId},attributes:['name','icon','template_name']});
                            
                          //  delete dataJson.title;
                            
                          //  delete dataJson.subTitle;
                            
                          //  dataJson.title = decipherTitle;
                            dataJson.icon = categoryIcon.icon;
                          //  dataJson.subTitle = decipherSubTitle;
                            dataJson.categoryName = categoryIcon.name;
                            dataJson.template_name = categoryIcon.template_name;
                            return dataJson;
                        })
                        Promise.all(allUserData).then(result=>{
                            return res.status(200).json({status:1,msg:'All user Categories',data:result});
                        }).catch(err=>{
                            console.log(err);
                        });
                    }else{
                        return res.status(403).json({status:1,msg:'Data not found'});
                    }
                }).catch(err=>{
                    console.log(err);
                    return res.status(500).json({status:0,msg:'Something went wrong'});
                });

}

exports.fetch_by_Categories= async (req,res,next)=>{

    
 try {
    let category=req.params.id;
    console.log(category, req.userId) 
  
    if (!req.isAuth){
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }




    UserCategories.findAll({where:{categoryCategoryId:category,userUid:req.userId,isActive:true},attributes:['userUid','isActive','userCategoryId','title','isPinned','titleFieldType','categoryCategoryId','subTitle'],order:[['title','ASC']]})
                .then(async pinnedData=>{

                    if(pinnedData.length>0){
 
                       

                        const allPinnedData = await pinnedData.map(async data=>{
                           // const decipherTitle = Encryptor.decrypt(data.title);
                            
                            const pinnedDataJson = JSON.parse(JSON.stringify(data));
                            
                          //  const decipherSubTitle = Encryptor.decrypt(pinnedDataJson.subTitle);
                            
                            const categoryIcon = await Categories.findOne({where:{categoryId:pinnedDataJson.categoryCategoryId},attributes:['name','icon','template_name']});
                            
                            
                          //  delete pinnedDataJson.title;
                           // delete pinnedDataJson.subTitle;

                           // pinnedDataJson.subTitle = decipherSubTitle;
                            pinnedDataJson.icon = categoryIcon.icon;
                            pinnedDataJson.categoryName = categoryIcon.name;
                            pinnedDataJson.template_name = categoryIcon.template_name;
                        //    pinnedDataJson.title = decipherTitle;

                            return pinnedDataJson;
                        })



                        Promise.all(allPinnedData).then(result=>{
                         
                             return res.status(200).json({status:1,msg:' categories',data:result});
                        }).catch(err=>{
                            console.log(err,'====================--=-=-=-=-');
                            res.status(500).json({status:1,msg:' An error was thrown',data:result});
                        });



                    }else return res.status(200).json({status:1,msg:'No data found',data:[]});
                    
               
               
               
                }).catch(err=>{
                    console.log(err);
                    return res.status(500).json({status:0,msg:'Something went wrong'})
                });

     
 } catch (error) {
    res.status(500).json({status:0,msg:'Sent from Catch'})
 }

}


function SantizeData(arr){
    arr=JSON.parse(JSON.stringify(arr))
    
    let final_array=[];
    console.log(arr)
    
    arr.forEach((element,index)=>{
     if(element.tags.includes(",")){

        let array=element.tags.split(",")
        array.forEach(element2=>{
            final_array.push({tags:element2})
        })
     }else final_array.push(element)
        
    })


    return final_array;

}