const jwt = require("jsonwebtoken");
const jwtSecret = require("../jwt_secret");

const validateAutenticated = (token, text) => {
  try {
    if (!token) {
      return false;
    }
    const usuario = jwt.verify(token, jwtSecret);
    console.log(`O ${usuario.nome} está executando a função ${text}`);
    return usuario.id;
  } catch {
    return false;
  }
};

module.exports = validateAutenticated;
