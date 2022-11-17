const router = require("express").Router();
const {
  getAllMetode,
  getMetodeByID,
  postMetode,
  updateMetodeByID,
  delMetodeByID,
  delAllMetode,
} = require("../controllers/metode.controller");

router.get("/", getAllMetode);
router.get("/:id", getMetodeByID);
router.post("/", postMetode);
router.put("/:id", updateMetodeByID);
router.delete("/:id", delMetodeByID);
router.delete("/", delAllMetode);

module.exports = router;
