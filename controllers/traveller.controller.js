const multer = require("multer");
const path = require("path");
const Traveller = require("./../models/traveller.model.js");
const fs = require("fs");

// Traveller Image upload function
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/traveller"); // Correct folder path
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "traveller_" +
        Math.floor(Math.random() * Date.now()) +
        path.extname(file.originalname)
    );
  },
});

exports.uploadTraveller = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, // 1 MB
  },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: Images Only!");
  },
}).single("travellerImage");

// Create Traveller

exports.createTraveller = async (req, res) => {
  try {
    //ตัวแปร
    let data = {
      ...req.body,
      travellerImage: req.file
        ? req.file.path.replace("images\\traveller\\", "")
        : "",
    };
    const result = await Traveller.create(data);
    res.status(201).json({
      message: "Traveller created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Check Login for Traveller
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

// Edit Traveller
exports.editTraveller = async (req, res) => {
  try {
    let data = {
      ...req.body,
    };

    if (req.file) { // Check if a new image is uploaded
      const traveller = await Traveller.findOne({
        where: {
          travellerId: req.params.travellerId,
        },
      });

      if (traveller.travellerImage) { // Delete the old image
        const oldImagePath = "images/traveller/" + traveller.travellerImage;
        fs.unlink(oldImagePath, (err) => {});
      }

      data.travellerImage = req.file.path.replace("images\\traveller\\", "");
    }else{
      delete data.travellerImage
    }
    const result = await Traveller.update(data, {
      where: {
        travellerId: req.params.travellerId,
      },
    });
    res.status(200).json({ message: "Edit successfully!", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deleteTraveller = async (req, res) => {
  try {
    const traveller = await Traveller.findOne({
      where: {
        travellerId: req.params.travellerId,
      },
    });

    if (traveller.travellerImage) { // Delete the old image
      const oldImagePath = "images/traveller/" + traveller.travellerImage;
      fs.unlink(oldImagePath, (err) => {
        console.log(err);
      });
    }
    const result = await Traveller.destroy({
      where: {
        travellerId: req.params.travellerId,
      },
    });
    res.status(200).json({
      message: "Traveller deeleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};