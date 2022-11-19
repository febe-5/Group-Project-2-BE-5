const router = require("express").Router();
const {
  getAllPembayaran,
  getPembayaranByID,
  postPembayaran,
  delPembayaranByID,
  delAllPembayaran,
  updatePembayaranById,
} = require("../controllers/pembayaran.controller");

router.get("/", getAllPembayaran);
router.get("/:id", getPembayaranByID);
router.post("/", postPembayaran);
router.put("/:id", updatePembayaranById);
router.delete("/:id", delPembayaranByID);
router.delete("/", delAllPembayaran);

module.exports = router;
