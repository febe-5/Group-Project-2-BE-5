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

router.get("/profile", verifyToken, getProfile);
router.put("/profile", verifyToken, updateProfile);

router.get("/users", verifyToken, verifyUser, getAllUser);
router.get("/users/:id", verifyToken, verifyUser, getUser);
router.put("/users/:id", verifyToken, verifyUser, updateUser);
router.delete("/users/:id", verifyToken, verifyUser, deleteUser);

module.exports = router;
