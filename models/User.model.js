const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	mobile: {
		type: Number,
		required: true,
		minlength: 10,
		maxlength: 10,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = Users = mongoose.model("user", UserSchema);
