const fs = require("fs-extra");

const deleteAllImages = () => fs.emptyDir("./images");

const deleteImage = imagePath => {
  const fullPath = `../../images${imagePath.split("/")[1]}`;
  return fs.remove(fullPath);
};

module.exports = {
  deleteImages: deleteAllImages,
  deleteImage: deleteImage,
};
