const joi = require('joi');

const schema=joi.object({
        formTitle:joi.string().max(100).required(),
        categoryId:joi.string().required(),
        isRequestedCategory:joi.boolean().required(),
        titleFieldType:joi.string().required(),
        isPinned:joi.boolean().required(),  
        subTitle:joi.allow(),
        sections:joi.required(),
        tags:joi.required()
    });

exports.categoryValidation = async(req,res,next)=>{
    const value= await schema.validate(req.body);
    if(value.error){
        return res.status(403).json({status:0,message:value.error.details[0].message});
    }else{
        next();
    }
};




//raise password request schema
const raise_forgot_password_request_schema=joi.object({
    email:joi.string().required()
})


exports.raiseRequest=async (req,res,next)=>{

const value=await raise_forgot_password_request_schema.validate(req.body);
if(value.error) return res.status(403).json({status:0,message:value.error.details[0].message});
else next()

}






//reset password schema
const reset_password_schema=joi.object({
    token:joi.string().required(),
    newpassword:joi.string().required()
})


exports.validate_reset_body=async(req,res,next)=>{
 const value=await reset_password_schema.validate(req.body);
 if(value.error) return res.status(403).json({status:0,message:value.error.details[0].message});
else next()
}