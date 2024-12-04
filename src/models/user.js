"use strict";
import { Sequelize } from "sequelize";
import { sequelize } from "../../src/config/db.connection.js";

module.exports = sequelize.define(
  "user",
  {
    id: {
      allowNull: false,
      autoIncrementIdentity: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userType: {
      type: Sequelize.ENUM,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      unique: true,
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    //For soft delete
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  },
  {
    //paranoid : true is used for soft deletion, and deletedAt is required for paranoid deletion to work
    paranoid: true,

    //If set to true, pg won't save the table/entity/model name as plural
    freezeTableName: false,
    modelName: "user",
  }
);
