var express = require('express');
var router = express.Router();
const countriesController = require('../controllers/countries');

router.post('/insertCountries',countriesController.countriesInsert);
router.get('/allCountries',countriesController.allCountries);
router.get('/countriesList',countriesController.countries);
module.exports = router;