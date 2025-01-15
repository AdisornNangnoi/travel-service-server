const { where } = require("sequelize");
const Traveller = require("./../models/traveller.model.js");

exports.createTraveller = async (req, res) => {
  try {
    const result = await Traveller.create(req.body);
    res
      .status(201)
      .json({ message: "Traveller created successfully!", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.checkLoginTraveller = async (req, res) => {
  try {
    const result = await Traveller.findOne({
      where: {
        travellerEmail: req.body.travellerEmail,
        travellerPassword: req.body.travellerPassword,
      },
    });
    if (result) {
      res.status(200).json({ message: "Login successfully!", data: result });
    } else {
      res.status(404).json({ message: "Login failed!", data: null });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.editTraveller = async (req, res) => {
  try {
    const result = await Traveller.update(req.body, {
      where: {
        travellerID: req.params.travellerID,
      },
    });
    res.status(200).json({ message: "Edit successfully!", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
