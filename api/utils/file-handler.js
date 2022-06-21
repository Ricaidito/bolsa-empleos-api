const fs = require("fs-extra");

const handleImagePath = () => {
  if (!fs.existsSync("./images")) {
    fs.mkdirSync("./images");
  }
};

const deleteAllImages = () => {
  fs.emptyDirSync("./images");
};

module.exports = {
  imagesPath: handleImagePath,
  deleteImages: deleteAllImages,
};
