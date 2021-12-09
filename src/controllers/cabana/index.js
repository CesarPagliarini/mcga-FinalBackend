const esquemaCabaña = require('../../models/cabanas')

const getCabañas = async (req, res) => {
    try{
        const response = await esquemaCabaña.find()
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Cabaña encontrado'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const addCabaña =  async (req, res) => {
    try{
        const Cabaña = new esquemaCabaña(req.body)
        const newCabaña = await Cabaña.save()

        return res.status(200).json({
           data: newCabaña,
            error: false,
            msg: 'Cabaña creado correctamente'
        })
    }catch (error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}



const getCabañaById = async (req, res) => {
    try{
        const response = await esquemaCabaña.findOne({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'El Cabaña solicitado no existe'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Cabaña encontrado con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}


const deleteCabañaById = async (req, res) => {
    try{
        const response = await esquemaCabaña.deleteOne({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el Cabaña'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Cabaña eliminado con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}


const updateCabañaById = async (req, res) => {
    try {
        
        const response = await esquemaCabaña.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'No se pudo actualizar el Cabaña',
            });
        }

        return res.status(200).json({
            data: response,
            error: false,
            message: 'Cabaña actualizado con exito'
        }) 
    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error,
        });
    }
}


module.exports = {
    getCabañas,
    addCabaña,
    getCabañaById,
    deleteCabañaById,
    updateCabañaById
}