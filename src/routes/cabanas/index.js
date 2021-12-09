const express = require('express');
const ctrlCabañas = require('../../controllers/cabana');
const router = express.Router();

router.get('/', ctrlCabañas.getCabañas);
router.post('/', ctrlCabañas.addCabaña);
router.get('/:id', ctrlCabañas.getCabañaById);
router.delete('/:id', ctrlCabañas.deleteCabañaById);
router.put('/:id', ctrlCabañas.updateCabañaById);

module.exports = router