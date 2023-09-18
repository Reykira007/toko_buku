const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/books', auth, controller.getAllBooks);
// router.post('/categories', auth, controller.creaateCategories);
// router.put('/categories/:id', auth, controller.updateCategories);
// router.delete('/categories/:id', auth, controller.deleteCategories);

module.exports = router;
