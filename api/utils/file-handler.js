const fs = require("fs-extra");
const path = require("path");
const gitKeepFile = ".gitkeep";
const imagesPath = path.resolve("./images");

const deleteAllLogos = () =>
  fs.readdir(imagesPath, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      if (file !== gitKeepFile) {
        fs.unlink(path.join(imagesPath, file));
      }
    });
  });

const deleteLogo = logoLink => {
  if (logoLink) {
    const fullLogoLinkDir = logoLink.split("/")[4];
    fs.unlink(path.join(imagesPath, fullLogoLinkDir));
  }
};

module.exports = {
  deleteLogos: deleteAllLogos,
  deleteLogo: deleteLogo,
};
