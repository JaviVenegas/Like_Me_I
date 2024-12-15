-- Active: 1729978767201@@127.0.0.1@5432@likeme


--create database named likeme
CREATE DATABASE likeme;


--create table 
CREATE TABLE posts (
    id SERIAL,
    titulo VARCHAR(25), 
    img VARCHAR(1000),
    descripcion VARCHAR(255), 
    likes INT
);
INSERT INTO posts (titulo, img, descripcion, likes) VALUES
('primera Publicación', 'https://images.unsplash.com/photo-1581879011839-713b3c49122c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Las plantitas siempre presentes', 75),
('segunda Publicación', 'https://images.unsplash.com/photo-1618706548227-e840a64ccc04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Cactus world', 50);



SELECT * FROM posts;


DELETE FROM posts;
