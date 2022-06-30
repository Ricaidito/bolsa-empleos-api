const mongoose = require("mongoose");
const Job = require("../models/job.model");
const fileHandler = require("../utils/file-handler");

// Get all jobs
const getAllJobs = (req, res) => {
  Job.find()
    .then(jobs => res.status(200).json(jobs))
    .catch(err => res.status(500).json({ error: err }));
};

// Get a job by ID
const getJobById = (req, res) => {
  const id = req.params.jobId;
  Job.findById(id)
    .then(job => {
      if (job) res.status(200).json(job);
      else res.status(404).json({ message: "Not found!" });
    })
    .catch(err => res.status(500).json({ error: err }));
};

// Add a job
const addJob = (req, res) => {
  const job = new Job({
    _id: new mongoose.Types.ObjectId(),
    company: req.body.company,
    type: req.body.type,
    logo: req.file
      ? `http://${req.get("host")}/images/${req.file.filename}`
      : null,
    jobUrl: req.body.jobUrl ? req.body.jobUrl : null,
    position: req.body.position,
    location: req.body.location,
    category: req.body.category,
    contactEmail: req.body.contactEmail,
  });
  job
    .save()
    .then(result => res.status(201).json(result))
    .catch(err => res.status(500).json({ error: err }));
};

// Update a job by ID
const updateJob = async (req, res) => {
  const id = req.params.jobId;
  const jobToUpdate = await Job.findById(id);

  if (!jobToUpdate)
    return res.status(404).json({ error: `There's no job with ${id} id` });

  Job.updateOne(
    { _id: id },
    {
      $set: {
        company: req.body.company,
        type: req.body.type,
        jobUrl: req.body.jobUrl,
        position: req.body.position,
        location: req.body.location,
        category: req.body.category,
        contactEmail: req.body.contactEmail,
      },
    }
  )
    .then(() => res.status(200).json({ message: `Updated job ${id}` }))
    .catch(err => res.status(500).json({ error: err }));
};

// Delete a job by ID
const deleteJob = async (req, res) => {
  const id = req.params.jobId;
  const jobToDelete = await Job.findById(id);

  if (!jobToDelete)
    return res.status(404).json({ error: `There's no job with ${id} id` });

  Job.deleteOne({ _id: id })
    .then(() => fileHandler.deleteLogo(jobToDelete.logo))
    .then(() => res.status(200).json({ message: `Deleted job ${id}` }))
    .catch(err => res.status(500).json({ error: err }));
};

// Delete all jobs
const deleteAllJobs = (req, res) => {
  Job.deleteMany({})
    .then(() => fileHandler.deleteLogos())
    .then(() => res.status(200).json({ message: "Deleted all jobs" }))
    .catch(err => res.status(500).json({ error: err }));
};

module.exports = {
  getAllJobs: getAllJobs,
  getJobById: getJobById,
  addJob: addJob,
  updateJob: updateJob,
  deleteJob: deleteJob,
  deleteAllJobs: deleteAllJobs,
};
