import { Sequelize } from "sequelize";
import { sequelize } from "../../src/config/db.connection.js";

export const Post = sequelize.define("Post", {
  id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrementIdentity: true,
  },
});
