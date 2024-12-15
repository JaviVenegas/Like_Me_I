const { DB} = require('../config/bd');

//funcion para obtenerPost 
const obtenerPost = async () => {
    const SQLQuery = "SELECT * FROM POSTS"
    const response = await DB.query(SQLQuery);
    return response; 
}



//funcion para crearPost 
const crearPost = async (titulo, img, descripcion, likes) => {
    const SQLQuery = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *"; 
    const SQLValues = [titulo, img, descripcion, likes];
    
    const { rowCount, rows } = await DB.query(SQLQuery, SQLValues); 
    return { rowCount, rows }; 
}

module.exports = {
    crearPost, obtenerPost
}
