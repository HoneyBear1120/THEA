const Sequelize= require('sequelize');
const sequelize = require('../utils/database');

const search = sequelize.define("search",{
    count:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = search;