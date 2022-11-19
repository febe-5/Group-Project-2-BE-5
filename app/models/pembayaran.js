const mongoose = require("mongoose");

const { Schema } = mongoose;

const pembayaranSchema = new Schema({
	id_psikolog: {
		type: mongoose.ObjectId,
		ref: "psikolog",
	},
	id_user: {
		type: mongoose.ObjectId,
		ref: "users",
	},
	jadwal: String,
	id_metode: {
		type: mongoose.ObjectId,
		ref: "metode",
	},
});

const Pembayaran = mongoose.model("pembayaran", pembayaranSchema);

module.exports = Pembayaran;
