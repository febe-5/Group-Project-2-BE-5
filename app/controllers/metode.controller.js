const Metode = require("../models/metode");

module.exports = {
	getAllMetode: async (req, res) => {
		try {
			const data = await Metode.find({});
			res.json({
				status: "success",
				message: "Get data success",
				data,
			});
		} catch (error) {
			res.status(500).send({
				message: "opps something error!",
				error: error.message,
			});
		}
	},

	postMetode: (req, res) => {
		try {
			const data = req.body;
			const metode = new Metode(data);
			metode.save();
			res.status(201).json({
				status: "success",
				message: "Post data success",
				data,
			});
		} catch (error) {
			res.status(500).send({
				message: "opps something error!",
				error: error.message,
			});
		}
	},

	updateMetodeByID: async (req, res) => {
		try {
			const { id } = req.params;
			const update = req.body;
			await Metode.findByIdAndUpdate(id, update);
			res.json({
				status: "success",
				message: "Update data success",
				data: update,
			});
		} catch (error) {
			res.status(500).send({
				message: "opps something error!",
				error: error.message,
			});
		}
	},

	getMetodeByID: async (req, res) => {
		try {
			const { id } = req.params;
			const data = await Metode.findById(id);
			res.json({
				status: "success",
				message: "Get data success",
				data,
			});
		} catch (error) {
			res.status(500).send({
				message: "opps something error!",
				error: error.message,
			});
		}
	},

	delAllMetode: async (req, res) => {
		try {
			await Metode.deleteMany();
			res.json({
				status: "success",
				message: "Delete all data success",
			});
		} catch (error) {
			res.status(500).send({
				message: "opps something error!",
				error: error.message,
			});
		}
	},

	delMetodeByID: async (req, res) => {
		try {
			const { id } = req.params;
			await Metode.findByIdAndDelete(id);
			res.json({
				status: "success",
				message: "Delete data success",
			});
		} catch (error) {
			res.status(500).send({
				message: "opps something error!",
				error: error.message,
			});
		}
	},
};
