const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("hello from express");
});
router.use("/", require("./user.route"));

module.exports = router;
