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

// eslint-disable-next-line consistent-return
const checkUsuario = async (req, res) => {
  if (!req.body.email || typeof req.body.email !== 'string') {
    return res.status(400).send({ message: 'Email invalido' });
  }
  if (!req.body.password || typeof req.body.password !== 'string') {
    return res.status(400).send({ message: 'Password invalido' });
  }

  EsquemaUsuario.findOne({ email: req.body.email, password: req.body.password })
    .then((usuario) => {
      if (usuario) {
        res.status(200).send(usuario);
      } else {
        res.status(404).send({ message: 'Email o contraseña incorrecto.' });
      }
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

module.exports = {
  getUsuarios,
  addUsuario,
  checkUsuario,
};
