const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Job = require("../models/job.model");

// GET all jobs
router.get("/", (req, res) => {
  Job.find()
    .then(jobs => {
      res.status(200).json(jobs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// GET a job by ID
router.get("/:jobId", (req, res) => {
  const id = req.params.jobId;
  Job.findById(id)
    .then(job => {
      if (job) res.status(200).json(job);
      else res.status(404).json({ message: "Not found!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// POST a job
router.post("/", (req, res) => {
  const job = new Job({
    _id: new mongoose.Types.ObjectId(),
    company: req.body.company,
    type: req.body.type,
  });
  job
    .save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// PUT (Update) a job by ID
router.put("/:jobId", (req, res) => {
  const id = req.params.jobId;
  Job.updateOne(
    { _id: id },
    {
      $set: {
        company: req.body.company,
        type: req.body.type,
      },
    }
  )
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// DELETE a job by ID
router.delete("/:jobId", (req, res) => {
  const id = req.params.jobId;
  Job.deleteOne({ _id: id })
    .then(result => res.status(200).json(result))
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
