const knex = require("../conexao");
const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ Mensagem: "faltam os campos obrigatorios" });
  }
  const cadastrar = await knex("usuarios")
    .insert({ nome: nome, email: email, senha: senha })
    .returning("*")
    .debug();
  return res.send(cadastrar);
};

const atualizarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { id } = req.params;
  if (!nome || !email || !senha || id) {
    return res.status(400).json({ Mensagem: "faltam os campos obrigatorios" });
  }
  const atualizar = await knex("usuarios")
    .update({ nome: nome, email: email, senha: senha })
    .where({ id: id })
    .returning("*")
    .debug();

  return res.status(200).json(atualizar);
};

const listarUsuarios = async (req, res) => {
  const listar = await knex("usuarios");
  return res.status(200).json(listar);
};

const listarUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ Mensagem: "faltam os campos obrigatorios" });
  }
  const listar = await knex("usuarios").where({ id: id });
  return res.status(200).json(listar);
};

const deletarUsuario = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ Mensagem: "faltam os campos obrigatorios" });
  }
  const deletar = await knex("usuarios")
    .delete()
    .where({ id: id })
    .returning("*");
  return res.status(200).json(deletar);
};
module.exports = {
  cadastrarUsuario,
  atualizarUsuario,
  listarUsuarios,
  listarUsuarioPorId,
  deletarUsuario,
};
