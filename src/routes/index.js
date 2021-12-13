const express = require('express');

const clientes = require('./clientes');
const cabanas = require('./cabanas');

const router = express.Router();

router.use('/clientes', clientes);
router.use('/cabanas', cabanas);

module.exports = router;
