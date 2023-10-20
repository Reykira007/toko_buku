const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + '_' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    // Reject file
    cb({ message: 'Unsupported file format' }, false);
  }
};

const uploadMiddleware = multer({
  storage: storage,
  limits: {
    fileSize: 3000000, // 3 MB
  },
  fileFilter: fileFilter,
});

module.exports = uploadMiddleware;
