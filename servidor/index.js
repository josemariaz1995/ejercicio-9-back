const morganFreeman = require("morgan");
const cors = require("cors");
const { app, express } = require("./init");
const { errorGeneral, error404 } = require("./errores");
const rutasGatos = require("./rutas/gatos");

app.use(morganFreeman("dev"));
app.use(cors());
app.use(express.json());

app.use("/tipos", rutasGatos);

app.use(error404);
app.use(errorGeneral);
