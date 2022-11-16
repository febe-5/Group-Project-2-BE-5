const router = require("express").Router();
const metode = require("./metode.routes");
const pembayaran = require("./pembayaran.routes");

router.get("/", (req, res) => {
  res.send("hello from express");
});

router.use("/metode", metode);
router.use("/pembayaran", pembayaran);

module.exports = router;
