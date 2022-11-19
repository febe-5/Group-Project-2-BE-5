const router = require("express").Router();

const {
	registerValidation,
	loginValidation,
} = require("../middleware/validation");

const verifyToken = require("../middleware/verifyToken");
const verifyUser = require("../middleware/verifyUser");

const {
	register,
	login,
	getProfile,
	updateProfile,
	getAllUser,
	getUser,
	updateUser,
	deleteUser,
} = require("../controllers/user.controller");

router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);

router.use(verifyToken);
router.get("/profile", getProfile);
router.put("/profile", updateProfile);

router.use(verifyUser);
router.get("/users", getAllUser);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
