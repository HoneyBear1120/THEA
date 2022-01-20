var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/userCategories');
const categoryValidate = require('../utils/schema');

router.put('/categoryInsert',categoryController.categoryInsert);
router.post('/categoryDetail',categoryValidate.categoryValidation,categoryController.categoryDetail);
router.get('/usercategoryList',categoryController.userCategorylist);
module.exports=router;
