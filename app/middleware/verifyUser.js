const User = require("../models/user.model");

module.exports = async (req, res, next) => {
	const _id = req.user;

	try {
		const user = await User.findOne({ _id });

		if (!user.isAdmin)
			return res
				.status(403)
				.send({ status: "fail", msg: "user tidak memiliki akses" });

		next();
	} catch (error) {
		res.status(500).send({ status: "fail", msg: error.message });
	}
};
