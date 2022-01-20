const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/cities');

router.post('/insertCities',citiesController.insertCities);
router.get('/allCities',citiesController.citiesByStates);
router.post('/cityList',citiesController.cities);
router.get('/citiesByStates',citiesController.citiesByStates);

module.exports=router;