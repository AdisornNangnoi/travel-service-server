const travelCtrl = require("./../controllers/travel.controller.js");
const express = require("express");
const router = express.Router();

router.post("/", travelCtrl.createTravel);

router.get("/:travellerID", travelCtrl.getTravel);

router.put("/:travelID", travelCtrl.editTravel);

router.delete("/:travelID", travelCtrl.deleteTravel);

module.exports = router;
