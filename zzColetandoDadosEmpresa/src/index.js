const express = require("express");
const route = require("./routes");
const app = express();

app.use(route);
app.use(express.json());
app.listen(3000);
