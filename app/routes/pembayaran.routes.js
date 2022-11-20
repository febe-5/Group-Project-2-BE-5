const router = require("express").Router();

const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

const {
	getAllPembayaran,
	getPembayaranByID,
	postPembayaran,
	delPembayaranByID,
	delAllPembayaran,
	updatePembayaranById,
} = require("../controllers/pembayaran.controller");

router.post("/pembayaran", verifyToken, postPembayaran);
router.get("/pembayaran/:id", verifyToken, getPembayaranByID);
router.put("/pembayaran/:id", verifyToken, updatePembayaranById);
router.delete("/pembayaran/:id", verifyToken, delPembayaranByID);

router.get("/pembayaran", verifyToken, verifyUser, getAllPembayaran);
router.delete("/pembayaran", verifyToken, verifyUser, delAllPembayaran);

module.exports = router;
