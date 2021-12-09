const express = require('express');
const ctrlClientes = require('../../controllers/cliente');
const router = express.Router();

router.get('/', ctrlClientes.getClientes);
router.post('/', ctrlClientes.addCliente);
router.get('/:id', ctrlClientes.getClienteById);
router.delete('/:id', ctrlClientes.deleteClienteById);
router.put('/:id', ctrlClientes.updateClienteById);

module.exports = router