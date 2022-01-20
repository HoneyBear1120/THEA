const sequelize=require('../utils/database');
const Sequelize = require('sequelize');

const UserNotificationSetting = sequelize.define('userNotificationSetting',{
    uid:{
        type:Sequelize.STRING(120),
        primaryKey:true,
        allowNull:false,
        unique:true
    },
    type:{
        type:Sequelize.STRING(100),
        allowNull:false,
        defaultValue:''
    },
    email:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    inApp:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
});

module.exports=UserNotificationSetting;