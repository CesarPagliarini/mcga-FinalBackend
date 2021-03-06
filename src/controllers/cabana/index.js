const EsquemaCabaña = require('../../models/cabanas');

const getCabañas = async (req, res) => {
  try {
    const response = await EsquemaCabaña.find();
    return res.status(200).json({
      data: response,
      error: false,
      msg: 'Cabañas encontradas',
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const addCabaña = async (req, res) => {
  try {
    const Cabaña = new EsquemaCabaña(req.body);
    const newCabaña = await Cabaña.save();

    return res.status(200).json({
      data: newCabaña,
      error: false,
      msg: 'Cabaña creado correctamente',
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getCabañaById = async (req, res) => {
  try {
    const response = await EsquemaCabaña.findOne({ _id: req.params.id });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: 'La Cabaña solicitado no existe',
      });
    }

    return res.status(200).json({
      data: response,
      error: false,
      msg: 'Cabaña encontrada con éxito',
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const deleteCabañaById = async (req, res) => {
  try {
    const response = await EsquemaCabaña.deleteOne({ _id: req.params.id });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: 'No existe la cabaña solicitada',
      });
    }

    return res.status(200).json({
      data: response,
      error: false,
      msg: 'Cabaña eliminada con éxito',
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const updateCabañaById = async (req, res) => {
  try {
    const response = await EsquemaCabaña.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!response) {
      return res.status(400).json({
        error: true,
        msg: 'No se pudo actualizar la cabaña',
      });
    }

    return res.status(200).json({
      data: response,
      error: false,
      message: 'Cabaña actualizada con exito',
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

module.exports = {
  getCabañas,
  addCabaña,
  getCabañaById,
  deleteCabañaById,
  updateCabañaById,
};
