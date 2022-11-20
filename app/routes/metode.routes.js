const router = require("express").Router();

const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

const {
	getAllMetode,
	getMetodeByID,
	postMetode,
	updateMetodeByID,
	delMetodeByID,
	delAllMetode,
} = require("../controllers/metode.controller");

router.get("/metode", getAllMetode);
router.get("/metode/:id", getMetodeByID);

router.post("/metode", verifyToken, verifyUser, postMetode);
router.put("/metode/:id", verifyToken, verifyUser, updateMetodeByID);
router.delete("/metode/:id", verifyToken, verifyUser, delMetodeByID);
router.delete("/metode", verifyToken, verifyUser, delAllMetode);

module.exports = router;
