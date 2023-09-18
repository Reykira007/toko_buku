const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/categories', auth, controller.getAllCategories);
router.post('/categories', auth, controller.creaateCategories);

module.exports = router;
