const fs = require('fs');

const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(403).json({
        message: 'No file uploaded',
      });
    }

    res.status(201).json({
      message: 'Success upload image',
      data: { src: `/uploads/${req.file.filename}` },
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    next(error);
  }
};

module.exports = { uploadImage };
