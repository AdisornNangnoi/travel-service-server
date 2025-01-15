const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const travellerRoute = require("./routes/traveller.route.js");
const travelRoute = require("./routes/travel.route.js");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use("/traveller", travellerRoute);
app.use("/travel", travelRoute);

//เทสการเชื่อมต่อกับ web server
app.get("/", (req, res) => {
  res.json({
    message: "Hello from Adisorn DTI SAU server!",
  });
});

//สร้างช่องทางในการติดต่อกับ web server
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
