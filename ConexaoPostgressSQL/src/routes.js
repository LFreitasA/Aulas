const express = require("express");
const routes = express();
const {
  cadastrarAutor,
  listarAutores,
  obterAutor,
  editarAutor,
  excluirAutor,
  livrosDoAutor,
} = require("./controllers/autores");
const {
  listarLivro,
  cadastrarLivro,
  obterLivro,
  editarLivro,
  excluirLivro,
} = require("./controllers/livros");
const {
  listarUsuarios,
  pesquisarusuario,
  cadastrarUsuario,
  atualizarUsuario,
  excluirusuario,
} = require("./controllers/usuarios");
const {
  listarEmprestimos,
  buscarEmprestimoPorID,
  cadastrarEmprestimo,
  atualizarEmprestimo,
  excluirEmprestimo,
} = require("./controllers/emprestimos");

//autores
routes.get("/autores", listarAutores);
routes.get("/autores/:id", obterAutor);
routes.post("/autores/", cadastrarAutor);
routes.put("/autores/:id", editarAutor);
routes.delete("/autores/:id", excluirAutor);
routes.get("/livrosDoAutor/:id", livrosDoAutor);

//livros
routes.get("/livros", listarLivro);
routes.get("/livros/:id", obterLivro);
routes.post("/livros/", cadastrarLivro);
routes.put("/livros/:id", editarLivro);
routes.delete("/livros/:id", excluirLivro);

//usuarios
routes.get("/usuario", listarUsuarios);
routes.get("/usuario/:id", pesquisarusuario);
routes.post("/usuario/", cadastrarUsuario);
routes.put("/usuario/:id", atualizarUsuario);
routes.delete("/usuario/:id", excluirusuario);

//emprestimos
routes.get("/emprestimo", listarEmprestimos);
routes.get("/emprestimo/:id", buscarEmprestimoPorID);
routes.post("/emprestimo/", cadastrarEmprestimo);
routes.put("/emprestimo/:id", atualizarEmprestimo);
routes.delete("/emprestimo/:id", excluirEmprestimo);

module.exports = routes;
