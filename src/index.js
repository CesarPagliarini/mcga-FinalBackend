const express = require('express'); // Framework web que permite crear APIS
const router = require('./routes'); // Importacion de las rutas
const mongoose = require('mongoose'); // Libreria para el manejo de la base de datos
const cors = require('cors'); // Se utiliza para matchear origenes cruzados
require('dotenv').config(); // Se utiliza para manejar las variables globales

// Obtencion de las variables de entorno
const port = process.env.PORT || 4000;
const usuarioDb = process.env.USUARIO_DB;
const passwordDb = process.env.PASS_DB;
const nombreDb = process.env.NOMBRE_DB;

// String de conexion a la base de datos
const conexionDb = `mongodb+srv://${usuarioDb}:${passwordDb}@cluster0.4qowy.mongodb.net/${nombreDb}?retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(express.json()); // Permite obtener el cuerpo del POST via req.body

app.use('/', router);
app.get('/',(req,res)=>{
	res.send('Servidor OK');
});

app.listen(port, () => {
	console.log(`Server corriendo en puerto: ${port}`);
});

mongoose.connect(conexionDb).then(() => {
	console.log('Conexion exitosa con la base de datos');
}).catch((error) => {
	console.log(`Error en la conexion, error:  ${error}`);
});

