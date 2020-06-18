const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User.model");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtToken = config.get("jwtToken");
/**
 * !Express-Validator
 */
const { check, validationResult } = require("express-validator");

/**
 * @PUBLIC_POST_API
 * ! Register route /api/register
 * ! Public access
 */

router.post(
	"/",
	[
		check("name", "Name is required").not().isEmpty(),
		check("email", "Enter a valid Email Address").isEmail(),
		check("mobile", "Mobile Number is required").not().isEmpty(),
		check(
			"password",
			"Enter a password with 6 or more characters",
		).isLength({
			min: 6,
		}),
	],
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}
		const { name, email, password, mobile } = req.body;
		// console.log(name, email, password)
		try {
			// get user from DB
			let user = await User.findOne({
				email,
			});
			// check if user already exists
			if (user) {
				return res.status(400).json({
					errors: [
						{
							msg: "User already exists",
						},
					],
				});
			}

			// create new user
			user = new User({
				name,
				email,
				password,
				mobile,
			});
			// encrypt using bcrypt
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();
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
			console.error(err.message);
			res.status(500).send("server error");
		}
	},
);

module.exports = router;
