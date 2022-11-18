const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports = async (req, res, next) => {
	const token =
		req.headers.authorization.split(" ")[1] || req.headers.authorization;

	if (!token) return res.status(403).send({ status: "fail", msg: "forbidden" });

	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);

		if (!decoded)
			return res.status(401).send({ status: "fail", msg: "unauthorized" });

		if (!decoded._id)
			return res.status(401).send({ status: "fail", msg: "unauthorized" });

		const user = await User.findOne({ _id: decoded._id }, "-password");

		if (!user)
			return res.status(404).send({ status: "fail", msg: "user not found" });

		req.user = decoded._id;
		next();
	} catch (error) {
		res.status(500).send({ status: "fail", msg: error.message });
	}
};
