const express = require('express');
const router = express.Router();

const ctrlBio = require('../controllers/ctrlBio');

/* GET home page. */
router.get('/', ctrlBio.container);

module.exports = router;
