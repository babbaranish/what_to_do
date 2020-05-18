const mongoose = require("mongoose");
const TodoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    todo: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = Todos = mongoose.model('todo', TodoSchema);