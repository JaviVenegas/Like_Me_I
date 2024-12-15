const DB = require('../config/bd');

//funcion para obtenerPost 
const obtenerPost = async () => {
    try {
        const { rows } = await DB.query("SELECT * FROM posts");
        return rows; 
    } catch (err) {
        console.error("Error retrieving posts:", err);
        throw err; 
    }
}

//funcion para crearPost 

const crearPost = async (titulo, img, descripcion, likes) => {
    const SQLQuery = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *"; 
    const SQLValues = [titulo, img, descripcion, likes];
    
    try {
        const { rowCount, rows } = await DB.query(SQLQuery, SQLValues); 
        return { rowCount, rows }; 
    } catch (err) {
        console.error("Error creating post:", err);
        throw err; 
    }
}

module.exports = {
    crearPost, obtenerPost
}
