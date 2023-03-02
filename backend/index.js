require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.listen(process.env.PORT, () => {
  console.log("Server Up and Running");
});
