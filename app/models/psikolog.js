const mongoose = require("mongoose");
const { Schema } = mongoose;

const psikologSchema = new Schema({
    nama_psikolog: {
        type: String,
        required: true
    },
    no_telp: {
        type: String,
        required: true
    },
    pengalaman: {
        type: String,
        required: true
    },
    jadwal: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    layanan: [{type: Schema.Types.ObjectId, ref: "Layanan"}],
})

const Psikolog = mongoose.model("Psikolog", psikologSchema)

module.exports = Psikolog