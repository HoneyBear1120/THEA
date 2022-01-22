const Sequelize = require('sequelize');
require('dotenv').config();

console.log('DB host ' + process.env.DB_HOST);
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    pool: {
        max: 30,
        min: 0,
        acquire: 100000000,
        idle: 5000
    }
});

module.exports = sequelize;