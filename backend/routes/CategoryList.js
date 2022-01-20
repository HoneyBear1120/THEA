const express = require('express');
const router = express.Router();
const categoryListController = require('../controllers/categories');

router.get('/allUserCategory',categoryListController.allCategories);
router.post('/insertCategoty',categoryListController.insertCategory);

module.exports = router;