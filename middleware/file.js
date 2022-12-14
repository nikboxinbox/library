const multer = require("multer");
//TODO: для теста загрузки скачивания пока формат изображений
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/bookFiles");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${new Date().toISOString().replace(/:/g, "-")}-${file.originalname}`
    );
  },
});

const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({
  fileFilter,
  storage,
});
