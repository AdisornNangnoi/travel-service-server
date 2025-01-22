const Sequelize = require("sequelize");
const sequelize = require("./../db/db.js");

const Traveller = sequelize.define(
  "traveller_tb",
  {
    travellerID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "travellerID",
    },
    travellerFullname: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: "travellerFullname",
    },
    travellerEmail: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: "travellerEmail",
    },
    travellerPassword: {
      type: Sequelize.STRING(50),
      allowNull: false,
      field: "travellerPassword",
    },
    travellerImage: {
      type: Sequelize.STRING(150),
      allowNull: false,
      field: "travellerImage",
    },
  },
  {
    tableName: "traveller_tb",
    timestamps: false,
    fteezeTableName: true,
  }
);

module.exports = Traveller;
