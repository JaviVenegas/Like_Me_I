const Posts = require('../models/posts');


const handleObtenerPosts = async (req, res) => {
    const response = await Posts.obtenerPost();
    res.status(200).json({
        msg: 'Posts obtenidos con exito',
        data: response
    });
}



const handleCrearPost = async (req, res) => {
    const { titulo, img, descripcion } = req.body;
    const response = await Posts.crearPost(titulo, img, descripcion);
    res.status(200).json({
        msg: 'post creado con exito',
        data: response
    });
}

module.exports = {
    handleCrearPost, handleObtenerPosts
}
