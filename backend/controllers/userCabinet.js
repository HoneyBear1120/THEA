const Cabinet = require('../models/cabinet');
const base64id = require('base64id');
const { data } = require('../utils/Category');

exports.userCabinet = async(req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }   

    const files = req.body.files;  
    if(files==null || files == ''){
        return res.status(200).json({status:1,msg:"Please provide file data"})
    }else{
        Cabinet.create({uid:base64id.generateId(),files:files,userUid:req.userId})
                .then(async cabinetData=>{
                    return res.status(200).json({status:1,msg:'Files uploaded Successfully'});
                }).catch(err=>{
                    console.log(err);
                    return res.status(500).json({status:0,msg:'something went wrong'});
                });
    }
}

exports.userCabinetList = async(req,res,next)=>{
    if (!req.isAuth) {
        const response = { status: 0, message: "request not authorize." };
        res.status(401).json(response);
        return;
    }

    Cabinet.findAll({where:{userUid:req.userId},attributes:['uid','files','userUid','fileName','fileType']})
            .then(async cabinetData=>{
                if(cabinetData.length>0){
                    return res.status(200).json({status:1,msg:'All Files',data:cabinetData})
                }else{
                    return res.status(403).json({status:1,msg:'No data found',data:[]});
                }
            })
            .catch(err=>{
                console.log(err);
                return res.status(500).json({status:1,msg:'Something went wrong'});
            });
}