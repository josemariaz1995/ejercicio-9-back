const Gato = require("../db/modelos/Gato");

const listarTipos = async () => {
  try {
    const tipos = await Gato.find();
    return tipos;
  } catch (e) {
    throw new Error(e.message);
  }
};

const mostrarTipo = async (idTipo) => {
  try {
    const tipo = await Gato.findById(idTipo);
    return tipo;
  } catch (e) {
    throw new Error(e.message);
  }
};

const crearTipo = async (tipo) => {
  try {
    const tipoCreado = await Gato.create({ tipo });
    return tipoCreado;
  } catch (e) {
    throw new Error(e.message);
  }
};

const modificarTipo = async (idTipo, tipo) => {
  try {
    const tipoModificado = await Gato.findByIdAndUpdate(idTipo, { tipo });
    return tipoModificado;
  } catch (e) {
    throw new Error(e.message);
  }
};

const borrarTipo = async (idTipo) => {
  try {
    const tipoEliminado = await Gato.findByIdAndDelete(idTipo);
    return tipoEliminado;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  borrarTipo,
  crearTipo,
  listarTipos,
  modificarTipo,
  mostrarTipo,
};
