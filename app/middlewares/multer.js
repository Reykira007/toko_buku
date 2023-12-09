const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') + '_' + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    // Reject file
    cb(
      new Error(
        'Format file tidak valid. Mohon gunakan formaat JPEG, JPG, atau PNG'
      ),
      false
    );
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
