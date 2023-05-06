const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require('cors');

app.use(cors());

const errorMiddleware = require("./middlewares/errors");

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "./config/config.env" });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Import all routes
const feedback = require("./routes/feedback");

app.use("/api/v1", feedback);


if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../web-ui/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../web-ui/build/index.html"));
  });
}
// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
