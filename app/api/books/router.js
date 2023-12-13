const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/books', auth, controller.getAllBooks);
router.post('/books', auth, controller.createBooks);
router.put('/books/:id', auth, controller.updateBooks);
// router.delete('/categories/:id', auth, controller.deleteCategories);

module.exports = router;
