require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello Everyone" });
});
app.listen(process.env.PORT, () => {
  console.log("Server Up and Running");
});
