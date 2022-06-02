const instanciaAxios = require("../servicos/pagerme");

const criarPedido = async (req, res) => {
  const { body } = req;
  try {
    const pedido = await instanciaAxios.post("transactions", body);
    res.status(200).json(pedido);
  } catch (error) {
    const {
      data: { errors },
      status,
    } = error.response;

    return res
      .status(status)
      .json({ erro: `${errors[0].parameter_name} ${errors[0].message} ` });
  }
};

const consultarPedido = async (req, res) => {
  return res.json("consultarPedido");
};

module.exports = {
  criarPedido,
  consultarPedido,
};
