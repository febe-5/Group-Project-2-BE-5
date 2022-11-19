const Pembayaran = require("../models/pembayaran");

module.exports = {
	getAllPembayaran: async (req, res) => {
		try {
			const data = await Pembayaran.find()
				.populate("id_psikolog")
				.populate("id_user");
			res.json({
				status: "success",
				message: "Get data success",
				data,
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: "opps something error!",
				error: error.message,
			});
		}
	},

	postPembayaran: async (req, res) => {
		try {
			const data = req.body;
			//data = req.user
			const pembayaran = new Pembayaran({ ...data });
			pembayaran.save();
			const dataPsikolog = await pembayaran.populate("id_psikolog");
			const { nama_psikolog, no_telp } = dataPsikolog.id_psikolog;
			res.json({
				status: "success",
				message: "Pembayaran Berhasil!",
				data: { nama_psikolog, no_telp: `https://wa.me/${no_telp}` },
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: "opps something error!",
				error: error.message,
			});
		}
	},

	updatePembayaranById: async (req, res) => {
		try {
			const { id } = req.params;
			const update = req.body;
			const data = await Pembayaran.findByIdAndUpdate(id, update);
			res.json({
				status: "success",
				message: "Update data success",
				data,
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: "opps something error!",
				error: error.message,
			});
		}
	},

	getPembayaranByID: async (req, res) => {
		try {
			const { id } = req.params;
			const data = await Pembayaran.findById(id);
			res.json({
				status: "success",
				message: "Get data success",
				data,
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: "opps something error!",
				error: error.message,
			});
		}
	},

	delAllPembayaran: async (req, res) => {
		try {
			await Pembayaran.deleteMany();
			res.json({
				status: "success",
				message: "Delete all data success",
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: "opps something error!",
				error: error.message,
			});
		}
	},

	delPembayaranByID: async (req, res) => {
		try {
			const { id } = req.params;
			await Pembayaran.findByIdAndDelete(id);
			res.json({
				status: "success",
				message: "Delete data success",
			});
		} catch (error) {
			res.status(500).send({
				status: "fail",
				message: "opps something error!",
				error: error.message,
			});
		}
	},
};
