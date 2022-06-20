const express = require("express");
const router = express.Router();

// GET all jobs
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET /jobs",
  });
});

// GET a job by ID
router.get("/:jobId", (req, res, next) => {
  const id = req.params.jobId;
  res.status(200).json({
    message: `GET /jobs/${id}`,
  });
});

// POST a job
router.post("/", (req, res, next) => {
  const job = {
    company: req.body.company,
    type: req.body.type,
  };
  res.status(201).json({
    message: "POST /jobs",
    createdJob: job,
  });
});

// PUT (Update) a job by ID
router.put("/:jobId", (req, res, next) => {
  const id = req.params.jobId;
  res.status(200).json({
    message: `PUT /jobs/${id}`,
  });
});

// DELETE a job by ID
router.delete("/:jobId", (req, res, next) => {
  const id = req.params.jobId;
  res.status(200).json({
    message: `DELETE /jobs/${id}`,
  });
});

module.exports = router;
