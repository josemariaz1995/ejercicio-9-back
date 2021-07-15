const express = require("express");
const {
  mostrarTipo,
  modificarTipo,
  listarTipos,
  crearTipo,
  borrarTipo,
} = require("../../cli/controladorGatos");
const app = express();
app.use(express.json());
const router = express.Router();

router.get("/listado", async (req, res, next) => {
  try {
    const tipos = await listarTipos();
    res.json(tipos);
  } catch (e) {
    const error = new Error("No hay tipos que listar");
    error.codigo = 404;
    next(error);
  }
});

router.get("/tipo/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const tipo = await mostrarTipo(id);
    res.json(tipo);
  } catch (e) {
    const error = new Error("No existe el tipo");
    error.codigo = 404;
    next(error);
  }
});

router.post("/nuevo-tipo", async (req, res, next) => {
  const { tipo } = req.body;
  try {
    const tipoNuevo = await crearTipo(tipo);
    res.json(tipoNuevo);
  } catch (e) {
    const error = new Error("No se ha podido crear");
    error.codigo = 404;
    next(error);
  }
});

router.put("/tipo/:id", async (req, res, next) => {
  const { id } = req.params;
  const { tipo } = req.body;
  try {
    const tipoModificado = await modificarTipo(id, tipo);
    res.json(tipoModificado);
  } catch (e) {
    const error = new Error("No existe el tipo para modificar");
    error.codigo = 404;
    next(error);
  }
});

router.delete("/tipo/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const tipos = await borrarTipo(id);
    res.json(tipos);
  } catch (e) {
    const error = new Error("No existe el tipo para eliminar");
    error.codigo = 404;
    next(error);
  }
});

module.exports = router;
