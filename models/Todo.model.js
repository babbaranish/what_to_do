const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
		},
		todo: {
			type: String,
			required: true,
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		deleteWhen: {
			type: Date,
			default: new Date(),
			required: true,
		}, // you don't need to set this default, but I like it there for semantic clearness
	},
	{
		timestamps: {
			createdAt: "createdAt",
			updatedAt: "",
		},
	},
);
TodoSchema.index({ deleteWhen: 1 }, { expireAfterSeconds: 10 });
module.exports = Todos = mongoose.model("todo", TodoSchema);
