const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	nama: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	umur: { type: Number, required: true },
	isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
