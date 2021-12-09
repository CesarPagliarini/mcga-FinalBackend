const mongoose = require('mongoose');

const esquemaCabaña = new mongoose.Schema({
    codigo: {
        type: Number,
        require: [true, 'el codigo es un campo requerido']
    },
    descripcion: {
        type: String,
        require: [true, 'la descripcion es un campo requerido']
    },
    precio: {
        type: Number,
        require: [true, 'el precio es un campo requerido']
    },
});

module.exports = mongoose.model('cabañas', esquemaCabaña);