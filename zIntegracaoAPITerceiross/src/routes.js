const express = require("express");
const routes = express();
const { criarPedido, consultarPedido } = require("./controllers/require");

routes.post("/criarPedido", criarPedido);
routes.get("/consultarPedido", consultarPedido);

module.exports = routes;
