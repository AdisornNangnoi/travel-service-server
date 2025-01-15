//ควบคุมการทำงาน
//เช่น insert, update, delete

const { where } = require("sequelize");
const Travel = require("./../models/travel.model.js");

exports.createTravel = async (req, res) => {
  try {
    const travel = await Travel.create(req.body);
    res
      .status(201)
      .json({ message: "Travel created successfully!", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.editTravel = async (req, res) => {
  try {
    const result = await Travel.update(req.body, {
      where: {
        travelID: req.params.travelID,
      },
    });
    res.status(200).json({ message: "Edit successfully!", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteTravel = async (req, res) => {
  try {
    const result = await Travel.destroy({
      where: {
        travelID: req.params.travelID,
      },
    });
    res.status(200).json({ message: "delete successfully!", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTravel = async (req, res) => {
  try {
    const result = await Travel.findAll({
      where: {
        travellerID: req.params.travellerID,
      },
    });
    if (result) {
      res.status(200).json({ message: "get successfully!", data: result });
    } else {
      res.status(404).json({ message: "get failed!", data: null });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
