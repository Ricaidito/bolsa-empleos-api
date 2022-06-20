const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  company: String,
  type: String,
});

module.exports = mongoose.model("Job", jobSchema);
