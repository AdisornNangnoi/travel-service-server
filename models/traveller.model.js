const Sequelize = require("sequelize");
const sequelize = require("./../db/db.js");

const Traveller = sequelize.define("traveller_tb", {
  travellerID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "travellerID",
  },
  travellerFullName: {
    type: Sequelize.STRING(50),
    allowNull: false,
    field: "travellerFullName",
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
},
{
    tableName: "traveller_tb",
    timestamps: false,
    fteezeTableName: true
}
);

module.exports = Traveller;
