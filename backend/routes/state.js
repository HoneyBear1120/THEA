const express = require('express');
const router = express.Router();
const stateController = require('../controllers/states');

router.post('/insertState',stateController.insertStates);
router.get('/allState',stateController.statesByCountries);
router.get('/statesList',stateController.states);

module.exports=router;