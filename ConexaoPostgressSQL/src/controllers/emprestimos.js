const { query } = require("../conexao");

const listarEmprestimos = async (req, res) => {
  try {
    const emprestimos = await query("select* from emprestimos");
    if (emprestimos.rowCount === 0) {
      return res.status(404).json("Não foram encontrados emprestimos");
    }

    return res.status(200).json(emprestimos.rows);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
const buscarEmprestimoPorID = async (req, res) => {
  const { id } = req.params;
  try {
    const buscarEmprestimo = await query(
      "select * from emprestimos where id=$1",
      [id]
    );
    if (buscarEmprestimo.rowCount === 0) {
    }
    return res.status(200).json(buscarEmprestimo.rows);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastrarEmprestimo = async (req, res) => {
  const { id_usuario, id_livro, status } = req.body;

  try {
    const contemUsuario = await query("select * from usuarios where id=$1", [
      id_usuario,
    ]);
    if (contemUsuario.rowCount === 0) {
      return res.status(404).json("Usuário não encontrado");
    }
    const contemLivro = await query("select * from livros where id=$1", [
      id_livro,
    ]);

    console.log(contemUsuario.rows);
    if (contemLivro.rowCount === 0) {
      return res.status(404).json("livro não encontrado");
    }
    console.log(contemLivro.rowCount);

    const cadastrar = await query(
      `insert into emprestimos (id_usuario,id_livro, status ) values ($1, $2, $3)`,
      [id_usuario, id_livro, status]
    );

    if (cadastrar.rowCount === 0) {
      return res.status(400).json("Não foi possivel cadastrar o emprestimo");
    }
    return res.status(200).json("Emprestimo cadastrado com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarEmprestimo = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  try {
    const validarID = await query("select * from emprestimos where id=$1", [
      id,
    ]);
    console.log(validarID);
    if (validarID.rowCount === 0) {
      return res.status(404).json("O emprestimo não foi encontrado.");
    }
    const atualizar = await query(
      `update emprestimos set  status=$1 where id=$2 `,
      [status, id]
    );

    if (atualizar.rowCount === 0) {
      return res.status(400).json("Não foi possivel cadastrar o emprestimo");
    }
    return res.status(200).json("Emprestimo atualizado com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirEmprestimo = async (req, res) => {
  const { id } = req.params;
  try {
    const validarID = await query("select * from emprestimos where id=$1", [
      id,
    ]);
    console.log(validarID);
    if (validarID.rowCount === 0) {
      return res.status(404).json("O emprestimo não foi encontrado.");
    }
    const excluir = await query("delete from emprestimos where id=$1", [id]);
    if (excluir.rowCount === 0) {
      return res.status(400).json("não foi possivel excluir o emprestimo");
    }
    return res.status(200).json("Emprestimo excluído");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  listarEmprestimos,
  buscarEmprestimoPorID,
  cadastrarEmprestimo,
  atualizarEmprestimo,
  excluirEmprestimo,
};
