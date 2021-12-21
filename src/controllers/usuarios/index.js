const EsquemaUsuario = require('../../models/usuarios');

const getUsuarios = async (req, res) => {
  try {
    const response = await EsquemaUsuario.find();
    return res.status(200).json({
      data: response,
      error: false,
      msg: 'Usuario encontrado',
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const addUsuario = async (req, res) => {
  try {
    const Usuario = new EsquemaUsuario(req.body);
    const newUsuario = await Usuario.save();

    return res.status(200).json({
      data: newUsuario,
      error: false,
      msg: 'Usuario creado correctamente',
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

module.exports = {
  getUsuarios,
  addUsuario,
};
