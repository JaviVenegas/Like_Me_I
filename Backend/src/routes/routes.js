
//este archivo es para definir los endpoints 

const { Router } = require ('express');   //exportando el router de express para ser usado. 
const {handleObtenerPosts, handleCrearPost} = require('../controllers/index');  //importamos los controladores que continene la logica para manejar las solicitudes a los endpoints correspondientes. 

const router = Router();

router.get('/posts', handleObtenerPosts);  //obtener post 
router.post('/posts', handleCrearPost);  //crear un nuevo post 


module.exports = router; 
