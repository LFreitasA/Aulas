const { query } = require("../conection");
const validateAutenticated = require("../help/usersValidation");

const cadastrarPokemon = async (req, res) => {
  const { token, nome, habilidades, imagem, apelido } = req.body;
  const autencation = validateAutenticated(token, "cadastrar um pokemon");
  if (!autencation) {
    return res.status(401).json("problemas no Token");
  }

  if (!nome) {
    return res.status(400).json("É necessário informar o nome do pokemon!");
  }

  if (!habilidades) {
    return res
      .status(400)
      .json("É necessário informar as habilidades do pokemon!");
  }

  try {
    const salvarPokemon = await query(
      "insert into pokemons (usuario_id, nome, habilidades, imagem, apelido) values ($1, $2,$3,$4,$5)",
      [autencation, nome, habilidades, imagem, apelido]
    );

    if (salvarPokemon.rowCount === 0) {
      return res.status(400).json("Não foi possivel salvar o pokemon");
    }

    return res.status(200).json("Pokemon salvo.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarApelido = async (req, res) => {
  const { token, apelido } = req.body;
  const { id } = req.params;
  const autencation = validateAutenticated(token, "atualizar um pokemon");

  if (!autencation) {
    return res.status(401).json("problemas no Token");
  }
  if (!id) {
    return res.status(400).json("É necessário informar o id do pokemon!");
  }
  if (!apelido) {
    return res.status(400).json("É necessário informar o apelido do pokemon!");
  }
  try {
    const localizarPokemon = await query("select * from pokemons where id=$1", [
      id,
    ]);
    if (localizarPokemon.rowCount === 0) {
      return res.status(404).json("Pokemon não encontrado");
    }
    const salvarPokemon = await query(
      "update pokemons set apelido=$1 where id=$2",
      [apelido, id]
    );

    if (salvarPokemon.rowCount === 0) {
      return res.status(400).json("Não foi possivel atualizar o pokemon");
    }

    return res.status(200).json("Pokemon atualizado.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const listarPokemons = async (req, res) => {
  const { token } = req.body;
  const autencation = validateAutenticated(token, "atualizar um pokemon");

  if (!autencation) {
    return res.status(401).json("problemas no Token");
  }

  const listar = await query("select * from pokemons");
  if (listar.rowCount === 0) {
    return res.status(400).json("Não há dados para listar");
  }
  return res.status(200).json(listar.rows);
};

const listarPokemonsPorID = async (req, res) => {
  const { token } = req.body;
  const { id } = req.params;
  const autencation = validateAutenticated(token, "atualizar um pokemon");

  if (!autencation) {
    return res.status(401).json("problemas no Token");
  }

  if (!id) {
    return res.status(400).json("O campo id é obrigatório");
  }
  const listar = await query("select * from pokemons where id=$1", [id]);
  if (listar.rowCount === 0) {
    return res.status(400).json("Não há dados para listar");
  }
  return res.status(200).json(listar.rows);
};

const excluirPokemon = async (req, res) => {
  const { token } = req.body;
  const { id } = req.params;
  const autencation = validateAutenticated(token, "atualizar um pokemon");

  if (!autencation) {
    return res.status(401).json("problemas no Token");
  }

  if (!id) {
    return res.status(400).json("O campo id é obrigatório");
  }
  const listar = await query("delete from pokemons where id=$1", [id]);
  if (listar.rowCount === 0) {
    return res.status(400).json("Pokemon não encontrado");
  }
  return res.status(200).json("Pokemon excluido");
};

module.exports = {
  cadastrarPokemon,
  atualizarApelido,
  listarPokemons,
  listarPokemonsPorID,
  excluirPokemon,
};
