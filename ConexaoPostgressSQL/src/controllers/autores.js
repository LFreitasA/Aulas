const { query } = require("../conexao");

const cadastrarAutor = async (req, res) => {
  const { nome, idade } = req.body;
  console.log(nome);
  if (!nome) {
    res.status(400).json({ ERRO: "O Campo nome é Obrigatório" });
  }
  try {
    const insertOnDatabase =
      "insert into autores (nome, idade) values ($1, $2)";
    const autor = await query(insertOnDatabase, [nome, idade]);

    if (autor.rowCount === 0) {
      return res
        .status(400)
        .json({ Erro: "Não foi possivel cadastrar o autor" });
    }

    return res.status(200).json("Autor cadastrado com sucesso");
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const listarAutores = async (req, res) => {
  try {
    const { rows: autores } = await query("select * from autores");

    return res.status(200).json(autores);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const obterAutor = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows: autor } = await query("select * from autores where id = $1", [
      id,
    ]);
    if (autor.length === 0) {
      return res.status(404).json({ erro: "os dados não foram encontrados" });
    }

    return res.status(200).json(autor);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const editarAutor = async (req, res) => {
  const { id } = req.params;
  const { nome, idade } = req.body;
  if (!nome) {
    return res.status(400).json("O campo nome é obrigatório");
  }
  try {
    const autor = await query("select * from autores where id= $1", [id]);

    if (autor.rowCount === 0) {
      return res.status(404).json("Autor não foi encontrado");
    }

    const autorAtualizado = await query(
      "update autores set nome = $1, idade =$2 where id = $3",
      [nome, idade, id]
    );

    if (autorAtualizado.rowCount === 0) {
      return res.status(404).json("Autor não foi atualizado.");
    }
    return res.status(200).json("Autor foi atualizado com sucesso.");
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const excluirAutor = async (req, res) => {
  const { id } = req.params;
  try {
    const autor = await query("select * from autores where id = $1", [id]);
    if (autor.rowCount === 0) {
      return res.status(404).json("Autor não encontrado");
    }

    const autorComLivros = await query(
      "select * from livros where autor_id=$1",
      [id]
    );
    if (autorComLivros.rowCount !== 0) {
      return res
        .status(404)
        .json("Não é possivel excluir um autor com livros cadastrados");
    }
    const deletarAutor = await query("delete from autores where id = $1", [id]);
    if (deletarAutor.rowCount === 0) {
      return res.status(404).json("Não é possivel excluir o autor");
    }
    return res.status(200).json("Autor deletado");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const livrosDoAutor = async (req, res) => {
  const { id } = req.params;
  try {
    const autor = await query("select * from autores where id=$1", [id]);
    if (autor.rowCount === 0) {
      return res.status(400).json("Autor não encontrado");
    }
    const pesquisa = `select autores.id, autores.nome as nome_autor, autores.idade, livros.nome as nome_livro, livros.editora, livros.genero, livros.data_publicacao
         from autores as autores
         left join livros as livros on livros.autor_id=autores.id
         where autores.id=$1`;
    const livrosAutor = await query(pesquisa, [id]);

    if (livrosAutor.rowCount === 0) {
      return res.status(404).json("Autor Não encontrado");
    }
    return res.status(200).json(livrosAutor.rows);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  cadastrarAutor,
  listarAutores,
  obterAutor,
  editarAutor,
  excluirAutor,
  livrosDoAutor,
};
