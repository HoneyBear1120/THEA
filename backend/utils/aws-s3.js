const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path')
const s3 = new AWS.S3();

var myBucket = 'theadev-app-assets';
 
exports.uploadFile = function (file, key) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file.path, function (err, data) {
            if (err) {
                throw err;
            }
            params = { Bucket: myBucket, Key: key, Body: data, ACL: 'public-read', ContentType: file.mimetype };
            s3.putObject(params, function (err, data) {
                if (err) {
                    reject(err);
                    //console.log(err)
                } else {
                    resolve(key);
                    //console.log("Successfully uploaded data to myBucket/myKey" + data);
                }
            });
        });
    })
}


exports.uploadFiles = function (files, prefix) {
    return new Promise(function (resolve, reject) {
        var s3KeyArr = [];
        for (var i = 0; i < files.length; i++) {
            const file = files[i];
            //console.log("filename===>" + file.filename);
            let fileExt = path.extname(file.originalname);
            let myKey = prefix + file.filename + fileExt;
            fs.readFile(file.path, function (err, data) {
                if (err) {
                    throw err;
                }
                params = { Bucket: myBucket, Key: myKey, Body: data, ACL: 'public-read', ContentType: file.mimetype };
                s3.putObject(params, function (err, data) {
                    if (err) {
                        reject(err);
                        //console.log(err)
                    } else {
                        s3KeyArr.push({ "s3key": myKey });
                        fs.unlinkSync(file.path);

                        if (s3KeyArr.length === files.length) {
                            resolve(s3KeyArr);
                        }
                    }
                });
            });
        }
    });
}

exports.deleteFile = async(key)=>{
    var params = {  Bucket:myBucket, Key: key };

   s3.deleteObject(params, function(err, data) {
     if (err) console.log(err, err.stack);  // error
     else     console.log();                 // deleted
   });
}