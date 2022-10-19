const express = require("express");
const knex = require("./conexao/conexao");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  //inserir registro
  const guido = {
    nome: "guido cerqueira 2",
    email: "guido2@email.com",
    telefone: "(99) 9999-9999",
  };

  const joao = {
    nome: "joao cerqueira 2",
    email: "guido3@email.com",
    telefone: "(99) 9999-9999",
  };

  const maria = {
    nome: "maria cerqueira 2",
    email: "maria@email.com",
    telefone: "(99) 9999-9999",
  };
  //  const agenda = await knex("agenda").insert(guido).returning("*");
  const agenda = await knex("agenda")
    .insert([joao, maria])
    .returning(["id", "nome", "email"]);
  return res.json(agenda);
});

app.put("/:id", async (req, res) => {
  const { nome, email, telefone } = req.body;
  const { id } = req.params;

  const agendaAtualizada = await knex("agenda")
    .update({ nome, email, telefone })
    .where("id", id)
    .returning("*");
  res.json(agendaAtualizada);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const agendaAtualizada = await knex("agenda")
    .delete()
    .where("id", id)
    .returning("*");
  res.json(agendaAtualizada);
});

app.listen(3000);
