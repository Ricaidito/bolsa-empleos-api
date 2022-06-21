const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    company: { type: String, required: true },
    type: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
