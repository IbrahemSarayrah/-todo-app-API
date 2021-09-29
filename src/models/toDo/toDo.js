'use strict';

const toDoModel = (sequelize, DataTypes) => sequelize.define('TODO', {
    toDoItem: { type: DataTypes.STRING, required: true },
    assignedTo: { type: DataTypes.STRING, required: true },
    difficulty: { type: DataTypes.INTEGER, required: true },
    userId:{type: DataTypes.INTEGER}
});

module.exports = toDoModel;