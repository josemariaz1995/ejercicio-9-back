const { model, Schema } = require("mongoose");

const GatoSchema = new Schema({
  tipo: { type: String, required: true, unique: true },
});

const Gato = model("Gato", GatoSchema, "tipos");
module.exports = Gato;
