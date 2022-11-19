const mongoose = require("mongoose");

const { Schema } = mongoose;

const metodeSchema = new Schema({
  nama: String,
});

const Metode = mongoose.model("metode", metodeSchema);

module.exports = Metode;
