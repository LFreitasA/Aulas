const instaciaAxios = require("../servicos/abstractAPI");
const fs = require("fs/promises");

const consultarEmpresa = async (req, res) => {
  const { api_key, domain } = req.query;
  const link = `api_key=${api_key}&domain=${domain}`;
  try {
    const BuscarEmpresa = await instaciaAxios.get(`/?${link}`);
    empresa = BuscarEmpresa.data;
    if (!empresa.name) {
      return res.status(400).json({ "Não é possivel salvar": "erro" });
    }

    const salvarEmpresa = await fs.readFile("./src/empresas.json");
    console.log(JSON.parse(salvarEmpresa));

    const empresas = JSON.parse(salvarEmpresa);

    empresas.push([empresa]);

    const empresasStringify = JSON.stringify(empresas);
    console.log(empresasStringify);

    await fs.writeFile("./src/empresas.json", empresasStringify);
    return res.json({ empresa: "Pessoa cadastrada com sucesso" });
  } catch (error) {
    console.log("deu o erro");
    return res.json(error.message);
  }
};
module.exports = { consultarEmpresa };
