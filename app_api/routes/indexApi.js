const express = require('express');
const router = express.Router();

const ctrlApiBio = require('../controllers/ctrlApiBio');
const ctrlApiDisco = require('../controllers/ctrlApiDisco');

router
    .route('/bio')
    .get(ctrlApiBio.factList)
    .post(ctrlApiBio.addFact);

router
    .route('/discography')
    .get(ctrlApiDisco.discoList)
    .post(ctrlApiDisco.addRecord);

module.exports = router;
