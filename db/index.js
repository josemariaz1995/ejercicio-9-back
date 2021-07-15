require("dotenv").config();
const debug = require("debug")("tipos:db:conexion");
const chalk = require("chalk");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      debug(chalk.red("No se ha podido conectar a la base de datos"));
      debug(chalk.red(err.message));
      return;
    }
    debug(chalk.yellow("Conectado a la base de datos"));
  }
);
