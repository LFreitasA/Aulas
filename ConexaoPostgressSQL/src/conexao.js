const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "biblioteca",
  password: "123456",
  port: 5432,
});

const query = (text, param) => {
  return pool.query(text, param);
};

module.exports = {
  query,
};
// exemplo de passagem de parametro no pool
//pool.query('select * from livros where id = $1 and nome = $2', [3,"tal"])
