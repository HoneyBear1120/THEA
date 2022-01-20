const AwsS3 = require('../utils/aws-s3');

exports.uploadFile = (req, res, next) => {
    const prefix = req.params.prefix;

    if (req.files.length > 0) {
        AwsS3.uploadFiles(req.files, prefix + "/")
            .then(s3ObjKeys => {
                res.status(200).json({ status: 1, message: "", data: s3ObjKeys });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json('Server error');
            })
    } else {
        res.status(500).json({ status: 0, message: "files not uploaded" });
        //return user.save();
    }
}


exports.deleteFile = (req,res,next)=>{
    const key = req.body.key;
    AwsS3.deleteFile(key)
        .then(result=>{
            return res.status(200).json({status:1,msg:'Key deleted successfully'});
        }).catch(err=>{
            return res.status(500).json({status:0,msg:"something went wrong"});
        });
}