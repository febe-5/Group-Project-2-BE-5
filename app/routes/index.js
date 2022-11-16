const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("hello from express");
});
router.use("/api", require("./psikolog.route"));


module.exports = router;
