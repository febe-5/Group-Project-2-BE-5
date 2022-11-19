const mongoose = require('mongoose');
const { Schema } = mongoose;

const layananSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    psikolog: [{ type: mongoose.Types.ObjectId, ref: "Psikolog"}],
})

const Layanan = mongoose.model("Layanan", layananSchema);

module.exports = Layanan