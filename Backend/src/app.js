//librerias 
const express = require ("express");
const cors = require ("cors");
const morgan = require('morgan');


//Importacion de rutas 
const APIRoutes = require ('./routes/routes');


const app = express();


//configuracion de morgan para detectar errores en consola. 
app.use(morgan('dev'));


//Middelwares 
app.use(cors());
app.use (express.json());

//ruta de las APIs
app.use('/', APIRoutes);

//exportar archivo
module.exports = app 