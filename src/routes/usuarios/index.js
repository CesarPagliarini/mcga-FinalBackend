const express = require('express');
const ctrlUsuarios = require('../../controllers/usuarios');

const router = express.Router();

router.get('/', ctrlUsuarios.getUsuarios);
router.post('/', ctrlUsuarios.addUsuario);
// router.get('/:id', ctrlUsuarios.getUsuarioById);
// router.delete('/:id', ctrlUsuarios.deleteUsuarioById);
// router.put('/:id', ctrlUsuarios.updateUsuarioById);

module.exports = router;
