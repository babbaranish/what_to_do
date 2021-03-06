const express = require("express");
const router = express.Router();
const Todo = require("../../models/Todo.model");
const auth = require("../../middlewares/auth");
/**
 * !Express-Validator
 */
const {
	check,
	validationResult
} = require("express-validator");
const accountSid = "AC7088c784503b2fda81989a0fcb14e34c";
const authToken = "0aca977ed1ac3a572f7e57dc2b0eb3cf";
const client = require("twilio")(accountSid, authToken);
const schedule = require("node-schedule");

/**
 * @PRIVATE_POST_API
 * ! api/todos
 * @description create new todo
 */

router.post(
	"/",
	auth,
	[check("todo", "Enter some text").exists()],
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}
		try {
			const newTodo = new Todo({
				user: req.user.id,
				todo: req.body.todo,
				deleteWhen: req.body.deleteWhen,
			});

			const created = await newTodo.save();
			if (created) {
				const msgFullDate = new Date(req.body.deleteWhen);
				const msgYear = msgFullDate.getFullYear();
				const msgMonth = msgFullDate.getMonth();
				const msgDate = msgFullDate.getDate();
				const msgHour = msgFullDate.getHours();
				const msgMin = msgFullDate.getMinutes() - 1;
				const msgSec = msgFullDate.getSeconds();
				const sendDate = new Date(
					msgYear,
					msgMonth,
					msgDate,
					msgHour,
					msgMin,
					msgSec,
				);
				console.log(created, sendDate.toLocaleString());

				schedule.scheduleJob(sendDate, function () {
					client.messages
						.create({
							body: `Your Todo will be Deleted after 1min of Title:  ${req.body.todo}`,
							from: "whatsapp:+14155238886",
							to: "whatsapp:+919569922968",
						})
						.then((message) => console.log(message.sid))
						.catch((err) => console.err(err))
				});
			}
			res.json({
				newTodo,
			});
		} catch (err) {
			console.error(err.message);
			return res.status(500).send("server error");
		}
	},
);

/**
 * @PRIVATE_GET_API
 * ! api/todos
 * @description get todos of current logged in user
 */
router.get("/", auth, async (req, res, next) => {
	try {
		const todo = await Todo.find({
			user: req.user.id,
		});
		res.json(todo);
	} catch (err) {
		console.error(err);
		res.status(500).send("server error");
	}
});

/**
 * @PRIVATE_GET_API
 * ! api/todos
 * @description get todos of current logged in user by id
 */

router.get("/:id", auth, async (req, res, next) => {
	const toDoId = req.params.id;
	try {
		const todo = await Todo.findById(toDoId);
		if (!todo) {
			return res.status(400).json({
				msg: "No todo found",
			});
		}
		res.json(todo);
	} catch (err) {
		console.log(err);
		res.status(500).send("server error");
	}
});

/**
 * @PRIVATE_DELETE_API
 * ! api/todos
 * @description Delete Todo of specifice ID
 */

router.delete("/:id", auth, async (req, res, next) => {
	const toDoId = req.params.id;
	try {
		const todo = await Todo.findByIdAndDelete({
			_id: toDoId,
		});
		if (!todo) {
			return res.status(400).json({
				msg: "No todo found",
			});
		}
		res.json({
			msg: "Deleted successfully",
		});
	} catch (err) {
		res.status(500).send("server error");
	}
});

/**
 * @PRIVATE_UPDATE_API
 * ! api/todos
 * @description Update Todo of specifice ID
 */

router.put(
	"/:id",
	auth,
	check("todo", "Enter some text").exists(),
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}
		try {
			const toDoId = req.params.id;
			const todo = await Todo.findOneAndUpdate({
				_id: toDoId,
			}, {
				$set: {
					todo: req.body.todo,
					deleteWhen: req.body.deleteWhen,
				},
			}, );
			if (!todo) {
				return res.status(400).json({
					msg: "No todo found",
				});
			}
			res.json({
				msg: "updated successfully",
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send("server error");
		}
	},
);

/**
 * @PRIVATE_UPDATE_API
 * ! api/todos:id
 * @description set isCompleted to True of Todo with specifice ID
 */

router.patch("/:id", auth, async (req, res, next) => {
	try {
		const toDoId = req.params.id;
		const todo = await Todo.findOneAndUpdate({
			_id: toDoId,
		}, {
			$set: {
				isCompleted: req.body.isCompleted,
				isActive: req.body.isActive,
			},
		}, );
		if (!todo) {
			return res.status(400).json({
				msg: "No todo found",
			});
		}
		res.json({
			msg: "updated successfully",
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send("server error");
	}
});

module.exports = router;