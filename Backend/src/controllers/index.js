const Posts = require('../models/posts');


const handleObtenerPosts = async (req, res) => {
    try {
        const response = await Posts.getPosts();
        res.status(200).json({
            msg: 'Posts obtenidos con éxito',
            data: response
        });
    } catch (error) {
        console.error("Error al obtener los posts:", error);
        res.status(500).json({
            msg: 'Error al obtener los posts',
            error: error.message
        });
    }
}


const handleCrearPost = async (req, res) => {
    const { titulo, img, descripcion } = req.body;

 
    if (!titulo || !img || !descripcion) {
        return res.status(400).json({
            msg: 'Todos los campos son necesarios: titulo, img y descripcion'
        });
    }

    try {
        const response = await Posts.createPost(titulo, img, descripcion);
        res.status(201).json({
            msg: 'Post creado con éxito',
            data: response
        });
    } catch (error) {
        console.error("Error al crear el post:", error);
        res.status(500).json({
            msg: 'Error al crear el post',
            error: error.message
        });
    }
}

module.exports = {
    handleCrearPost,
    handleObtenerPosts
};
