const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

const {
	getAllPsikolog,
	getIdPsikolog,
	addPsikolog,
	updatePsikolog,
	deletePsikolog,
	deleteAllPsikolog,
} = require("../controllers/psikolog.controller");

router.get("/psikolog", getAllPsikolog);
router.get("/psikolog/:id", getIdPsikolog);

router.post("/psikolog", verifyToken, verifyUser, addPsikolog);
router.put("/psikolog/:id", verifyToken, verifyUser, updatePsikolog);
router.delete("/psikolog/:id", verifyToken, verifyUser, deletePsikolog);
router.delete("/psikolog", verifyToken, verifyUser, deleteAllPsikolog);

module.exports = router;
