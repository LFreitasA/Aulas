const express = require("express");
const { consultarEmpresa } = require("./controllers/empresas");
const routes = express();

routes.get("/empresa/", consultarEmpresa);

module.exports = routes;
