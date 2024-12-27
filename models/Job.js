const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Job = sequelize.define('Job', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    salary: DataTypes.TEXT,
    company: DataTypes.TEXT,
    email: DataTypes.TEXT,
    new_job: DataTypes.INTEGER,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    description: DataTypes.TEXT,
});

module.exports = Job;
