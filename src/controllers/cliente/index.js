const esquemaCliente = require('../../../src/models/clientes')

const getClientes = async (req, res) => {
    try{
        const response = await esquemaCliente.find()
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Cliente encontrado'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const addCliente =  async (req, res) => {
    try{
        const Cliente = new esquemaCliente(req.body)
        const newCliente = await Cliente.save()

        return res.status(200).json({
           data: newCliente,
            error: false,
            msg: 'Cliente creado correctamente'
        })
    }catch (error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}


//const addCliente = async(req, res) =>{
//    const Cliente = new esquemaCliente({
//        name: req.body.name,
//        last_name: req.body.last_name,
//        email: req.body.email,
//        active: req.body.active,
//        cargo: req.body.cargo
//    });
//    try{
//        const newCliente = await Cliente.save();
//        res.json(newCliente);
//    } catch (error){
//        res.json({message: "error"})
//    }
//}

const getClienteById = async (req, res) => {
    try{
        const response = await esquemaCliente.findOne({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'El cliente solicitado no existe'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Cliente encontrado con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}


const deleteClienteById = async (req, res) => {
    try{
        const response = await esquemaCliente.deleteOne({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el cliente'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Cliente eliminado con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}


const updateClienteById = async (req, res) => {
    try {
        
        const response = await esquemaCliente.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'No se pudo actualizar el Cliente',
            });
        }

        return res.status(200).json({
            data: response,
            error: false,
            message: 'Cliente actualizado con exito'
        }) 
    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error,
        });
    }
}


module.exports = {
    getClientes,
    addCliente,
    getClienteById,
    deleteClienteById,
    updateClienteById
}