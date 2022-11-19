const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

module.exports = {
	register: async (req, res) => {
		if (req.validateError) {
			const err = req.validateError.details[0].message;
			return res
				.status(400)
				.send({ status: "fail", msg: err.replace(/"/g, "") });
		}

		const { nama, email, password, umur } = req.body;

		const emailExist = await User.findOne({ email });
		if (emailExist)
			return res
				.status(400)
				.send({ status: "fail", msg: "Email sudah digunakan" });

		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);

		const user = new User({
			nama,
			email,
			umur,
			password: hashPassword,
		});

		try {
			await user.save();
			res.status(201).send({ status: "success", msg: "akun berhasil dibuat" });
		} catch (error) {
			res.status(500).send({ status: "fail", msg: error.message });
		}
	},

	login: async (req, res) => {
		if (req.validateError) {
			const err = req.validateError.details[0].message;
			return res
				.status(400)
				.send({ status: "fail", msg: err.replace(/"/g, "") });
		}

		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user)
			return res
				.status(404)
				.send({ status: "fail", msg: "user tidak ditemukan" });

		const validPass = await bcrypt.compare(password, user.password);
		if (!validPass)
			return res
				.status(400)
				.send({ status: "fail", msg: "password yang dimasukkan salah!" });

		const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
		res.send({
			status: "success",
			msg: "user berhasil login",
			accessToken: token,
		});
	},

	getProfile: async (req, res) => {
		const _id = req.user;

		try {
			const user = await User.findOne({ _id }, "-password");

			res.send({ status: "success", msg: "user ditemukan", data: user });
		} catch (error) {
			res.status(500).send({ status: "fail", msg: error.message });
		}
	},

	updateProfile: async (req, res) => {
		const _id = req.user;

		try {
			const oldUser = await User.findOne({ _id });

			let hashPassword;
			if (req.body.password) {
				const salt = await bcrypt.genSalt(10);
				hashPassword = await bcrypt.hash(req.body.password, salt);
			}

			const data = {
				nama: req.body.nama || oldUser.nama,
				email: req.body.email || oldUser.email,
				password: hashPassword || oldUser.password,
				umur: req.body.umur || oldUser.password,
			};

			await User.findOneAndUpdate({ _id }, { ...data });
			res.send({ status: "success", msg: "profil berhasil diperbarui" });
		} catch (error) {
			res.status(500).send({ status: "fail", msg: error.message });
		}
	},

	getAllUser: async (req, res) => {
		try {
			const users = await User.find({}, "-password");
			res.send({
				status: "success",
				msg: "semua user berhasil ditemukan",
				data: users,
			});
		} catch (error) {
			res.status(500).send({ status: "fail", msg: error.message });
		}
	},

	getUser: async (req, res) => {
		const { id } = req.params;
		try {
			const user = await User.findOne({ _id: id }, "-password");

			if (!user)
				return res
					.status(404)
					.send({ status: "fail", msg: "user tidak ditemukan" });

			res.send({
				status: "success",
				msg: "user berhasil ditemukan",
				data: user,
			});
		} catch (error) {
			res.status(500).send({ status: "fail", msg: error.message });
		}
	},

	updateUser: async (req, res) => {
		const _id = req.params.id;

		if (!req.body)
			return res
				.status(400)
				.send({ status: "fail", msg: "request body tidak boleh kosong" });

		try {
			const checker = await User.findOne({ _id });
			if (!checker)
				return res
					.status(404)
					.send({ status: "fail", msg: "user tidak ditemukan" });

			await User.findOneAndUpdate({ _id }, { ...req.body });
			res.send({ status: "success", msg: "data user berhasil diperbarui" });
		} catch (error) {
			res.status(500).send({ status: "fail", msg: error.message });
		}
	},

	deleteUser: async (req, res) => {
		const _id = req.params.id;

		try {
			const checker = await User.findOne({ _id });
			if (!checker)
				return res
					.status(404)
					.send({ status: "fail", msg: "user tidak ditemukan" });

			await User.deleteOne({ _id });
			res.send({ status: "success", msg: "user berhasil dihapus" });
		} catch (error) {
			res.status(500).send({ status: "fail", msg: error.message });
		}
	},
};
