const sequelize = require('../utils/database');
const Sequelize = require('sequelize');

const Categories = sequelize.define('categories',{
    categoryId:{
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
    isActive:{
        type:Sequelize.BOOLEAN,
        defaultValue:true
    },
    template_name:{
        type:Sequelize.STRING(120),
        allowNull:true
    }
    
});

module.exports=Categories;