const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

//เทสการเชื่อมต่อกับ web server
app.get("/", (req, res) => {
  res.json({
    message: "Hello from Adisorn DTI SAU server!",
  });
});

//สร้างช่องทางในการติดต่อกับ web server
app.listen(PORT, () => {
  console.log("Server is running on port "+ PORT);
});
