const express = require("express");
const router = express.Router();
const multer = require("multer");
const jobsController = require("../controllers/jobs.controller");
const multerConfig = require("../config/multer-config");
const uploadHandler = multer({
  storage: multerConfig.storageOptions,
  limits: multerConfig.imgSize,
  fileFilter: multerConfig.imgFilter,
});

router.get("/", jobsController.getAllJobs);
router.get("/:jobId", jobsController.getJobById);

router.post("/", uploadHandler.single("logo"), jobsController.addJob);

router.put("/:jobId", jobsController.updateJob);
router.put(
  "/logo/:jobId",
  uploadHandler.single("logo"),
  jobsController.updateLogo
);

router.delete("/:jobId", jobsController.deleteJob);
router.delete("/wipe/jobs", jobsController.deleteAllJobs);

module.exports = router;
