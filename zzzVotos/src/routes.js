const express = require("express");
const routes = express();

const votos = require("./controllers/votos");

routes.post("/votar", votos.votar);

module.exports = routes;
