const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require("cors");
const errorHandlers = require("./api/utils/error-handler");

const jobRoutes = require("./api/routes/jobs.routes");

// Database connection
mongoose.connect(process.env.MONGO_CONNECTION);

// Middleware
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use("/images", express.static("images"));

// CORS
app.use(cors());

// Routes
app.use("/jobs", jobRoutes);

// Error handling
app.use(errorHandlers.notFoundHandler);
app.use(errorHandlers.errorHandler);

module.exports = app;
