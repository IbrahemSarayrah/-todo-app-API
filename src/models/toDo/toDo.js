'use strict';

const toDoModel = (sequelize, DataTypes) => sequelize.define('TODO', {
    toDoItem: { type: DataTypes.STRING, required: true },
    assignedTo: { type: DataTypes.STRING, required: true },
    difficulty: { type: DataTypes.INTEGER, required: true },
    toDoid: { type: DataTypes.STRING, required: true },
    complete: { type: DataTypes.BOOLEAN, required: true },
});

module.exports = toDoModel;