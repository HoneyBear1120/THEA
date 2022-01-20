const Sequelize= require('sequelize');
const sequelize = require('../utils/database');

const State = sequelize.define("state",{
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
        type:Sequelize.STRING(200),
        allowNull:false
    },
    countryCode:{
        type:Sequelize.STRING(50),
        allowNull:true
    }
});

module.exports = State;