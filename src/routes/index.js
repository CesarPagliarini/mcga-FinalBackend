const express = require('express');

const clientes = require('./clientes');
const cabanas = require('./cabanas');
const usuarios = require('./usuarios');

const router = express.Router();

router.use('/clientes', clientes);
router.use('/cabanas', cabanas);
router.use('/usuarios', usuarios);

module.exports = router;
