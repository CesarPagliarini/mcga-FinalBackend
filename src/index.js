const express = require('express'); // Framework web que permite crear APIS
const app = express();
app.use(cors());
const router = require('./routes'); // Importacion de las rutas
const cors = require('cors'); // Se utiliza para matchear origenes cruzados
const mongoose = require('mongoose'); // Libreria para el manejo de la base de datos
require('dotenv').config(); // Se utiliza para manejar las variables globales

// Obtencion de las variables de entorno
const port = process.env.PORT || 4000;
const usuario_db = process.env.USUARIO_DB;
const password_db = process.env.PASS_DB;
const nombre_db = process.env.NOMBRE_DB;

// String de conexion a la base de datos
const conexion_db = `mongodb+srv://${usuario_db}:${password_db}@cluster0.4qowy.mongodb.net/${nombre_db}?retryWrites=true&w=majority`;

app.use(express.json()); // Permite obtener el cuerpo del POST via req.body

app.use('/', router);
app.get('/',(req,res)=>{
	res.send('Servidor OK');
});

app.listen(port, () => {
	console.log(`Server corriendo en puerto: ${port}`);
});

mongoose.connect(conexion_db).then(() => {
	console.log('Conexion exitosa con la base de datos');
}).catch((error) => {
	console.log(`Error en la conexion, error:  ${error}`);
});

