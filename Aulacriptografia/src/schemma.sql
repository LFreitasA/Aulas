----------------------------------------------------
-- Cria uma base de dados chamada pokemon
----------------------------------------------------
create database pokemon

----------------------------------------------------
-- Cria uma tabela pokemons
----------------------------------------------------
create table pokemons (
    id serial,
    usuario_id text not null,
    nome text not null,
    habilidades text not null,
    imagem text,
    apelido text 
)

----------------------------------------------------
-- Cria uma tablea de usuarios
----------------------------------------------------
create table usuarios(
    id serial,
    nome text not null, 
    email text not null check (email like '%@%'),
    senha text not null
)

