const express = require('express');
const ctrlUsuarios = require('../../controllers/usuarios');

const router = express.Router();

router.get('/', ctrlUsuarios.getUsuarios);
router.post('/', ctrlUsuarios.checkUsuario);
router.post('/add', ctrlUsuarios.addUsuario);
// router.get('/:id', ctrlUsuarios.getUsuarioByEmail);
// router.delete('/:id', ctrlUsuarios.deleteUsuarioById);
// router.put('/:id', ctrlUsuarios.updateUsuarioById);

module.exports = router;
