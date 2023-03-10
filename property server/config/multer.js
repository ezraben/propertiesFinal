const path = require("path");
const multer = require("multer");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log("file from multer config", file);
    const objFile = path.parse(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${objFile.name}_${uniqueSuffix}${objFile.ext}`);
  },
});

module.exports = multer({ storage: multerConfig });
