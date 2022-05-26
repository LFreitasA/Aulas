const {
  validarCampoObrigatorio,
  validarUsuariosNoSistema,
} = require("./validate");
const { query } = require("../conexao");
const listarUsuarios = async (req, res) => {
  try {
    const { rows: usuarios } = await query("select * from usuarios");

    if (usuarios.length === 0) {
      return res.status(404).json("Nenhum usuário encontrado");
    }

    for (usuario of usuarios) {
      console.log(usuario.id);
      const { rows: emprestimo } = await query(
        `select emprestimo.id, emprestimo.id_usuario, emprestimo.id_livro, emprestimo.status, livro.nome from emprestimos as emprestimo
        join livros as livro on emprestimo.id_usuario = $1`,
        [usuario.id]
      );
      usuario.emprestimo = emprestimo;
    }
    res.status(200).json(usuarios);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const pesquisarusuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuarios = await query("select * from usuarios where id=$1", [id]);
    validarUsuariosNoSistema(usuarios, res);
    return res.status(200).json(usuarios.rows);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastrarUsuario = async (req, res) => {
  const { nome, idade, email, telefone, cpf } = req.body;
  const nomeValidado = validarCampoObrigatorio(nome, "nome", res);
  const emailValidado = validarCampoObrigatorio(email, "email", res);
  const cpfValidado = validarCampoObrigatorio(cpf, "cpf", res);
  try {
    const validarCPFUnico = await query(`select * from usuarios where cpf=$1`, [
      cpf,
    ]);
    if (validarCPFUnico.rowCount !== 0) {
      return res.status(400).json("O CPF já tem cadastro");
    }
    const queryinclusao = `insert into usuarios (nome, idade,email, telefone, cpf) values
        ($1, $2,$3, $4, $5)`;
    const cadastrar = await query(queryinclusao, [
      nome,
      idade,
      email,
      telefone,
      cpf,
    ]);

    if (cadastrar.rowCount === 0) {
      return res.status(400).json("Erro ao realizar o cadastro do usuário");
    }
    return res.status(200).json("Cadastro realizado com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarUsuario = async (req, res) => {
  const { nome, idade, email, telefone, cpf } = req.body;
  const { id } = req.params;
  const nomeValidado = validarCampoObrigatorio(nome, "nome", res);
  const emailValidado = validarCampoObrigatorio(email, "email", res);
  const cpfValidado = validarCampoObrigatorio(cpf, "cpf", res);
  try {
    const validarClienteExiste = await query(
      "select * from usuarios where id=$1",
      [id]
    );
    if (validarClienteExiste.rowCount === 0) {
      return res
        .status(404)
        .json("Não foi encontrado o usuario para ser editado");
    }
    const queryinclusao = `update usuarios set nome=$1, idade=$2,email=$3, telefone=$4, cpf=$5 where id=$6`;
    const cadastrar = await query(queryinclusao, [
      nome,
      idade,
      email,
      telefone,
      cpf,
      id,
    ]);
    console.log("passou");
    if (cadastrar.rowCount === 0) {
      return res.status(400).json("Erro ao realizar o cadastro do usuário");
    }
    return res.status(200).json("Usuario alterado com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirusuario = async (req, res) => {
  const { id } = req.params;

  try {
    const validarClienteExiste = await query(
      "select * from usuarios where id=$1",
      [id]
    );
    if (validarClienteExiste.rowCount === 0) {
      return res
        .status(404)
        .json("Não foi encontrado o usuario para ser excluído");
    }

    const validarEmprestimo = await query(
      "select from emprestimos where id_usuario = $1",
      [id]
    );

    if (validarEmprestimo.rowCount != 0) {
      return res
        .status(400)
        .json("Não é possivel excluir usuários com livros emprestados");
    }
    const deletarUsuario = await query("delete from usuarios where id=$1", [
      id,
    ]);
    if (deletarUsuario.rowCount === 0) {
      return res.status(400).json("Não foi possível excluir o usuário");
    }

    return res.status(200).json("Usuário excluído com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  listarUsuarios,
  pesquisarusuario,
  cadastrarUsuario,
  atualizarUsuario,
  excluirusuario,
};
