const express = require('express');         // Framework web que permite crear APIS
const router = require('./routes');         //
const mongoose = require('mongoose');       // Libreria para el manejo de la base de datos
const cors = require('cors');               // Se utiliza para matchear origenes cruzados
require('dotenv/config');                   // Se utiliza para manejar las variables globales


//const port = 3000
const port = process.env.PORT || 3000;

const app = express()


app.use(express.json());            // Permite obtener el cuerpo del POST via req.body

//CORS 
app.use(cors());

app.use('/', router);

app.get('/',(req,res)=>{
    res.send("Servidor OK")
});

app.listen(port, () => {
    console.log(`Server corriendo en puerto: ${port}`)
})

mongoose.connect('mongodb+srv://parcialmcga:mcga123@cluster0.4qowy.mongodb.net/dbparcial?retryWrites=true&w=majority').then((result) => {
    console.log('Conexion exitosa con la base de datos')
}).catch((error) => {
    console.log(`Error en la conexion, error:  ${error}`)
})

