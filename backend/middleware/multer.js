const multer = require('multer');
const path = require('path');
const { v1: uuidv1 } = require('uuid');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+uuidv1())
    }
  });
  var upload = multer({ storage: storage }).array('file',10);

  module.exports = (req, res, next) => {
    upload(req, res, function (err) {
        //console.log(req.body);
        console.log(req.files);
        req.uploadError = false;
        if (err) {
            req.uploadError = true;
            //console.log(req.body);
            //return res.end("Error uploading file.");
        }
        next();
        //res.end("File is uploaded " + req.body.name);
    });
}
