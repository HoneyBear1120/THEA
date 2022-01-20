const Sequelize= require('sequelize');
const sequelize = require('../utils/database');

const Cities = sequelize.define("cities",{
    uid:{
        type:Sequelize.STRING(120),
        primaryKey:true,
        allowNull:false,
        unique:true
    },
    name:{
        type:Sequelize.STRING(200),
        allowNull:false,
        defaultValue:''
    },
    countryCode:{
        type:Sequelize.STRING(50),
        allowNull:true,
    },
    stateCode:{
        type:Sequelize.STRING(50),
        allowNull:true
    }
});

module.exports = Cities;