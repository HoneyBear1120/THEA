
var express = require('express');

var router = express.Router();

const categoryController = require('../controllers/userCategories');

const categoryValidate = require('../utils/schema');



router.put('/categoryInsert',categoryController.categoryInsert);

router.post('/categoryDetail',categoryValidate.categoryValidation,categoryController.categoryDetail);

router.get('/usercategoryList',categoryController.userCategorylist);

router.get('/userTitleDetail',categoryController.userTitleRecord);

router.get('/userAllCategory',categoryController.userAllCategoriesList);

router.get('/usercategoryListByData',categoryController.usercategoriesListByData);

router.get('/userPinnedCategoryList',categoryController.userPinnedCategories);

router.get('/deleted',categoryController.deleted)

router.get('/getCategoriesData/:id',categoryController.fetch_by_Categories)


router.put('/updatePinnedStatus',categoryController.bookmark)


router.put('/updateCategoryDetail',categoryController.updateUserCategoryListDetail);


router.put('/deleteForm',categoryController.deleteForm);

router.get('/userTags',categoryController.userTags);

router.get('/listByTags',categoryController.userCategoryListByTags);
module.exports=router;
