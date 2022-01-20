const Sequelize= require('sequelize');
const sequelize = require('../utils/database');

const Countries = sequelize.define("Country",{
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
    isoCode:{
        type:Sequelize.STRING(150),
        allowNull:true
    },
});

module.exports = Countries;