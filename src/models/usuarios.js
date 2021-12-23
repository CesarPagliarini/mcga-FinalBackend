const mongoose = require('mongoose');

const esquemaUsuario = new mongoose.Schema({
  nombre: {
    type: String,
    require: [true, 'el nombre es un campo requerido'],
  },
  email: {
    type: String,
    require: [true, 'el email es un campo requerido'],
  },
  password: {
    type: String,
    require: [true, 'el password es un campo requerido'],
  },
});

module.exports = mongoose.model('usuarios', esquemaUsuario);
