const { query } = require("../conection");
const securePassword = require("secure-password");
const pwd = securePassword();
const jwt = require("jsonwebtoken");
const jwtSecret = require("../jwt_secret");

const userCreate = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome) {
    return res.status(400).json("O nome é Obrigatório");
  }

  if (!email) {
    return res.status(400).json("O email é Obrigatório");
  }

  if (!senha) {
    return res.status(400).json("O senha é Obrigatório");
  }
  try {
    const validadeEmail = await query("select * from usuarios where email=$1", [
      email,
    ]);
    if (validadeEmail.rowCount > 0) {
      return res.status(400).json("O email informado já está cadastrado");
    }
    const hash = (await pwd.hash(Buffer.from(senha))).toString("hex");
    const register = await query(
      "insert into usuarios (nome, email, senha) values($1, $2, $3) RETURNING *",
      [nome, email, hash]
    );
    return res.status(200).json("Usuário cadastrado com sucesso");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email) {
    return res.status(400).json("O email é Obrigatório");
  }

  if (!senha) {
    return res.status(400).json("O senha é Obrigatório");
  }

  const usuarios = await query("select * from usuarios where email=$1", [
    email,
  ]);

  if (usuarios.rowCount === 0) {
    return res.status(400).json("Email ou senha incorretos");
  }

  const usuario = usuarios.rows[0];

  const result = await pwd.verify(
    Buffer.from(senha),
    Buffer.from(usuario.senha, "hex")
  );

  switch (result) {
    case securePassword.INVALID_UNRECOGNIZED_HASH:
    case securePassword.INVALID:
      return res.status(400).json("Email ou senha incorretos");

    case securePassword.VALID:
      break;
    case securePassword.VALID_NEEDS_REHASH:
      try {
        const hash = (await pwd.hash(BUffer.from(senha))).toString("hex");
        const usuario = await query(
          "update usuarios set senha=$1 where email=$2",
          [hash, email]
        );
      } catch {}
      break;
  }
  const token = jwt.sign(
    {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    },
    jwtSecret
  );
  return res.json(token);
};
module.exports = { userCreate, login };
