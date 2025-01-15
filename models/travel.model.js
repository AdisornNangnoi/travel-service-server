//ไฟล์ที่ทำงานแมปกับฐานข้อมูล travel
const Sequelize = require("sequelize");
const sequelize = require("./../db/db.js");

const Travel = sequelize.define(
  "travel_tb",
  {
    travelID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "travelID",
    },
    travelPlace: {
      type: Sequelize.STRING(200),
      allowNull: false,
      field: "travelPlace",
    },
    travelStartDate: {
      type: Sequelize.STRING(30),
      allowNull: false,
      field: "travelStartDate",
    },
    travelEndDate: {
      type: Sequelize.STRING(30),
      allowNull: false,
      field: "travelEndDate",
    },
    travelCostTotal: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      field: "travelCostTotal",
    },
    travellerID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "travellerID",
    },
  },
  {
    tableName: "travel_tb",
    timestamps: false,
    fteezeTableName: true,
  }
);

module.exports = Travel;
