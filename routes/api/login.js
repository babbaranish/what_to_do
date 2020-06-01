const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User.model");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtToken = config.get("jwtToken");
const auth = require("../../middlewares/auth");
/**
 * !Express-Validator
 */
const { check, validationResult } = require("express-validator");
/**
 * @PRIVATE_GET_API
 * ! api/login
 * @description Enter JWT token and login
 */

router.get("/", auth, async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		if (!user) {
			return res.status(400).json({
				msg: "Enter a valid credentials",
			});
		}
		res.json({
			user,
			success: "Login Successfull",
		});
	} catch (err) {
		console.error(err);
		res.status(500).send("server error");
	}
});

/**
 * @PRIVATE_POST_API
 * @description Enter email and password to get JWT token
 * ! api/login
 */
router.post(
	"/",
	[
		check("email", "Enter a valid Email Address").isEmail(),
		check("password", "Password Required").exists(),
	],
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}
		const { email, password } = req.body;
		try {
			const user = await User.findOne({
				email,
			});
			if (!user) {
				return res.status(400).json({
					errors: "Invalid Credentials",
				});
			}
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.status(400).json({
					errors: "Invalid Credentials",
				});
			}
			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				jwtToken,
				{
					expiresIn: 3600000,
				},
				(err, token) => {
					if (err) throw err;
					res.json({
						token,
					});
				},
			);
		} catch (err) {
			console.log(err);
			res.status(500).send("Server Error");
		}
	},
);
module.exports = router;
