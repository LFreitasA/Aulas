const validarCampoObrigatorio = (campo, texto, res) => {
  if (!campo) {
    return res.status(400).json(`O campo ${texto} é obrigatório`);
  }
};

const validarUsuariosNoSistema = (lista, res) => {
  if (lista.rowCount === 0) {
    return res.status(404).json("Não temos usuarios para retornar");
  }
};

module.exports = {
  validarCampoObrigatorio,
  validarUsuariosNoSistema,
};
