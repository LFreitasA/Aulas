const { query } = require("../conexao");

const cadastrarLivro = async (req, res) => {
  const { autor_id, nome, editora, genero, data_publicacao } = req.body;
  console.log(autor_id);
  const autor = await query("select * from autores where id = $1", [autor_id]);
  console.log(autor);
  if (autor.rowCount === 0) {
    return res.status(404).json("Autor não encontrado");
  }

  if (!nome) {
    return res.status(404).json("O campo nome do Livro é Obrigatório");
  }

  if (!genero) {
    return res.status(404).json("O campo genero do Livro é Obrigatório");
  }

  try {
    const livro = await query(
      "insert into livros (autor_id, nome, editora, genero, data_publicacao) values ($1,$2,$3,$4,$5)",
      [autor_id, nome, editora, genero, data_publicacao]
    );

    if (livro.rowCount === 0) {
      return res.status(400).json("Não foi possivel cadastrar o livro");
    }

    return res.status(200).json("O livro foi cadastrado com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
const listarLivro = async (req, res) => {
  const pesquisa = `select l.id, a.nome as nome_autor, l.nome as nome_livro, l.genero, l.editora, l.data_publicacao from livros l
    left join autores a on l.autor_id=a.id`;
  const livros = await query(pesquisa);
  if (livros.rowCount === 0) {
    res.status(404).json("Não foi encontrado livros na base");
  }

  res.status(200).json(livros.rows);
};

const obterLivro = async (req, res) => {
  const { id } = req.params;
  const livros = await query("select *from livros where id=$1", [id]);
  if (livros.rowCount === 0) {
    res.status(404).json("Não foi encontrado livros na base");
  }

  res.status(200).json(livros.rows);
};
const editarLivro = async (req, res) => {
  const { autor_id, nome, editora, genero, data_publicacao } = req.body;
  const { id } = req.params;

  const livro = await query("select * from livros where id = $1", [id]);
  if (livro.rowCount === 0) {
    return res.status(404).json("Livro não encontrado");
  }
  const autor = await query("select * from autores where id = $1", [autor_id]);
  if (autor.rowCount === 0) {
    return res.status(404).json("Autor não encontrado");
  }

  if (!nome) {
    return res.status(404).json("O campo nome do Livro é Obrigatório");
  }

  if (!genero) {
    return res.status(404).json("O campo genero do Livro é Obrigatório");
  }

  try {
    const livroaEditado = await query(
      "update livros set nome=$1, editora=$2, genero =$3, data_publicacao=$4 where id=$5",
      [nome, editora, genero, data_publicacao, id]
    );

    if (livroaEditado.rowCount === 0) {
      return res.status(400).json("Não foi possivel atualizado o livro");
    }

    return res.status(200).json("O livro foi atualizado com sucesso");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const excluirLivro = async (req, res) => {
  const { id } = req.params;
  try {
    const buscarLivros = await query("select * from livros where id=$1", [id]);

    if (buscarLivros.rowCount === 0) {
      return res.status(404).json("Livro não encontrado");
    }
    livroEmprestado = await query(
      "select * from emprestimos where id_livro=$1",
      [id]
    );
    if (livroEmprestado.rowCount != 0) {
      return res.status(404).json("O livro esta emprestado");
    }
    const livro = await query("delete from livros where id=$1", [id]);
    res.status(200).json("Livro deletado.");
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  cadastrarLivro,
  listarLivro,
  obterLivro,
  editarLivro,
  excluirLivro,
};
