const express = require('express');
const router = express.Router();

const ctrlDiscography = require('../controllers/ctrlDiscography');

/* GET home page. */
router.get('/', ctrlDiscography.contain);

module.exports = router;
