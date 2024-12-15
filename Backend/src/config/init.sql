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


SELECT * FROM posts;

