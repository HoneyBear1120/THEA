const sequelize = require('../utils/database');
const Sequelize = require('sequelize');

const UserCategories = sequelize.define('userCategories',{
    userCategoryId:{
        type:Sequelize.STRING(120),
        primaryKey:true,
        allowNull:false,
        unique:true
    },
    title:{
        type:Sequelize.STRING(500),
        defaultValue:"",
        allowNull:true
    },
    formData:{
        type:Sequelize.JSONB,
        defaultValue:"",
        allowNull:true
    },
    isActive:{
        type:Sequelize.BOOLEAN,
        defaultValue:true
    },
    isPinned:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    },
    titleFieldType:{
        type:Sequelize.STRING(120),
        defaultValue:"",
        allowNull:true
    },
    isRequestedCategory:{
        type:Sequelize.BOOLEAN,
        defaultValue:false,
        allowNull:true
    },
    subTitle:{
        type:Sequelize.STRING(500),
        allowNull:true
    },
    tags:{
        type:Sequelize.STRING(500),
        allowNull:true
    },
    recently:{
        type:'TIMESTAMP',
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    custom_updatedAt:{
        type: Sequelize.STRING(50),
        defaultValue:new Date(),
       allowNull: true
    }
});

module.exports=UserCategories;