const instaciaAxios = require("../servicos/geolocalizacao");

const votar = async (req, res) => {
  const { api_key, ip_address } = req.query;
  console.log(api_key);
  console.log(ip_address);
  const link = `api_key =${api_key}&ip_address=${ip_address}`;
  try {
    const BuscarEmpresa = await instaciaAxios.get(`/?${link}`);
    console.log(BuscarEmpresa);
    console.log("ta aqui ainda");
    return res.status(200).json(localizacao);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
module.exports = { votar };
