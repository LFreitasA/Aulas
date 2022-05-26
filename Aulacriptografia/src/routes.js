const express = require("express");
const routes = express();
const {
  cadastrarPokemon,
  atualizarApelido,
  listarPokemons,
  listarPokemonsPorID,
  excluirPokemon,
} = require("./controllers/pokemon");
const { userCreate, login } = require("./controllers/users");

routes.post("/cadastrarUsuario", userCreate);
routes.post("/login", login);
routes.post("/cadastrarPokemon", cadastrarPokemon);
routes.put("/atualizarApelido/:id", atualizarApelido);
routes.get("/listarPokemons", listarPokemons);
routes.get("/listarPokemons/:id", listarPokemonsPorID);
routes.delete("/excluirPokemon/:id", excluirPokemon);

module.exports = routes;
