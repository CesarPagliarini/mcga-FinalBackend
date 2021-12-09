const mongoose = require('mongoose');

const esquemaCliente = new mongoose.Schema({
    nombre: {
        type: String,
        require: [true, 'el nombre es un campo requerido']
    },
    apellido: {
        type: String,
        require: [true, 'el apellido es un campo requerido']
    },
    mail: {
        type: String,
        require: [true, 'el mail es un campo requerido'],
    },
    tipo_documento: {
        type: String,
        require: true,
    },
    numero_documento: {
        type: Number,
        require: true,
        unique: true
    },
    fecha_nacimiento: {
        type: Date,
        require: true,
    },
    domicilio: {
        type: String,
        require: true,
    },
    telefono: {
        type: Number,
        require: true,
    },
});

module.exports = mongoose.model('clientes', esquemaCliente);