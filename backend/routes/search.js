const express = require('express');
const router = express.Router();

const searchControllers = require('../controllers/search');

router.get('/usercategory',searchControllers.searchItems);
router.post('/addCount',searchControllers.recentSearch);


module.exports = router;