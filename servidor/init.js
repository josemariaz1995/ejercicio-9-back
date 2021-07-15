require("dotenv").config();
const express = require("express");
const debug = require("debug")("tipos:servidor:init");
const { chalk, errorServidor } = require("./errores");

const app = express();

const puerto = process.env.PUERTO || process.env.PORT;
const server = app.listen(puerto, () => {
  debug(
    chalk.greenBright.bold(`Servidor funcionando en http://localhost:${puerto}`)
  );
});

server.on("error", (e) => {
  errorServidor(e, puerto);
  console.log(e.code);
});

module.exports = {
  express,
  app,
};
