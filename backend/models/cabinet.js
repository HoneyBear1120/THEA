const Sequelize= require('sequelize');
const sequelize = require('../utils/database');

const Cabinet = sequelize.define("cabinet",{
    uid:{
        type:Sequelize.STRING(120),
        primaryKey:true,
        allowNull:false,
        unique:true
    },
    files:{
        type:Sequelize.STRING(200),
        allowNull:true
    },
    fileName:{
        type:Sequelize.STRING(200),
        allowNull:true
    },
    fileType:{
        type:Sequelize.STRING(200),
        allowNull:true
    }
});

module.exports = Cabinet;