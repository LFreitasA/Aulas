const express = require("express");
const usuarios = require("./controllers.js/users");
const rotas = express();

rotas.post("/", usuarios.cadastrarUsuario);
rotas.put("/:id", usuarios.atualizarUsuario);
rotas.get("/", usuarios.listarUsuarios);
rotas.get("/:id", usuarios.listarUsuarioPorId);
rotas.delete("/:id", usuarios.deletarUsuario);

module.exports = rotas;
