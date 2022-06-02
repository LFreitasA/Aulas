const axios = require("axios");

const instaciaAxios = axios.create({
  baseURL: "https://companyenrichment.abstractapi.com/v1/",
  params: {
    api_key: "9f421d88536d456fb818330e46902061",
  },
});

module.exports = instaciaAxios;
