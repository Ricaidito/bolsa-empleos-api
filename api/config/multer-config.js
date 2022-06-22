const multer = require("multer");

const storageOptions = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.mimetype.split("/")[1]}`);
  },
});

const imageFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
    cb(null, true);
  } else {
    cb(new Error("Only jpeg or jpg files are supported"), false);
  }
};

module.exports = {
  storageOptions: storageOptions,
  imgFilter: imageFilter,
  imgSize: {
    fileSize: 1024 * 1024 * 2,
  },
};
