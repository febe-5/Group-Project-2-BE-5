const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const token =
		req.headers.authorization.split(" ")[1] || req.headers.authorization;

	if (!token) return res.status(403).send({ status: "fail", msg: "forbidden" });

	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);

		if (!decoded)
			return res.status(401).send({ status: "fail", msg: "unauthorized" });

		if (!decoded._id)
			return res.status(401).send({ status: "fail", msg: "unauthorized" });
		req.user = decoded._id;
		next();
	} catch (error) {
		res.status(500).send({ status: "fail", msg: error.message });
	}
};
