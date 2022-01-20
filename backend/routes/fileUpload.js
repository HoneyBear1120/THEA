var express = require('express');
var router = express.Router();
const fileUploader = require('../middleware/multer');

const filesCtlr = require('../controllers/fileUpload');

router.post("/upload/:prefix", fileUploader, filesCtlr.uploadFile);
router.put('/delete',filesCtlr.deleteFile);
module.exports = router;