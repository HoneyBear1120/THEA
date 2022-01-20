const express = require('express');
const router = express.Router();
const userCabinetControllers = require('../controllers/userCabinet');

router.post('/userCabinetUpload',userCabinetControllers.userCabinet);
router.get('/userCabinetList',userCabinetControllers.userCabinetList);

module.exports = router;