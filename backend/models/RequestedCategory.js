const sequelize = require('../utils/database');
const Sequelize = require('sequelize');

const RequestedCategory = sequelize.define('requestedCategories',{
    RequestedCategoryId:{
        type:Sequelize.STRING(120),
        primaryKey:true,
        allowNull:false,
        unique:true
    },
    name:{
        type:Sequelize.STRING(120),
        defaultValue:"",
        allowNull:true
    },
    icon:{
        type:Sequelize.STRING(120),
        defaultValue:"",
        allowNull:true
    },
    isRequest:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    }
});

module.exports=RequestedCategory;