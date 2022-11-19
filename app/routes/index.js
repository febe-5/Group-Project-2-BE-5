const router = require("express").Router();
const metode = require("./metode.routes");
const pembayaran = require("./pembayaran.routes");

router.get("/", (req, res) => {
	res.send("hello from express");
});

router.use("/", require("./user.route"));

router.use("/", require("./psikolog.route"));

router.use("/", metode);
router.use("/", pembayaran);

module.exports = router;
