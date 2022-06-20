const express = require("express");
const app = express();

const morganLogger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const jobRoutes = require("./api/routes/jobs");
const loginRoutes = require("./api/routes/login");

mongoose.connect(process.env.MONGO_CONNECTION);

// Middlewares
app.use(morganLogger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// CORS configurations
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    return res.status(200).json({});
  }
  next();
});

// Routes
app.use("/jobs", jobRoutes);
app.use("/login", loginRoutes);

// Error handling
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});

module.exports = app;
