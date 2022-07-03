const express = require("express");
const multer = require("multer");
const jobsController = require("../controllers/jobs.controller");
const multerConfig = require("../utils/multer-config");

const router = express.Router();
const uploadHandler = multer({
  storage: multerConfig.storageOptions,
  limits: multerConfig.imgSize,
  fileFilter: multerConfig.imgFilter,
});

// GET routes
router.get("/", jobsController.getAllJobs);
router.get("/:jobId", jobsController.getJobById);

// POST routes
router.post("/", uploadHandler.single("logo"), jobsController.addJob);

// PUT routes
router.put("/:jobId", jobsController.checkIfJobExist, jobsController.updateJob);
router.put(
  "/logo/:jobId",
  jobsController.checkIfJobExist,
  uploadHandler.single("logo"),
  jobsController.updateLogo
);

// Delete routes
router.delete(
  "/:jobId",
  jobsController.checkIfJobExist,
  jobsController.deleteJob
);
router.delete("/wipe/jobs", jobsController.deleteAllJobs);

module.exports = router;
