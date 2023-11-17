const express = require('express');
const router = express.Router();

const controller = require('../controllers/tareasControllers');

router.get('/', controller.index );

module.exports = router