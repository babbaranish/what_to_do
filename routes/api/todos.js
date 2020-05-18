const express = require("express");
const router = express.Router();
const Todo = require('../../models/Todo.model');
const User = require('../../models/User.model')
const config = require('config');
const mongoose = require('mongoose');
const auth = require('../../middlewares/auth');
/**
 * !Express-Validator
 */
const {
    check,
    validationResult
} = require('express-validator');
/**
 * @PRIVATE_POST_API
 * ! api/todos
 * @description create new todo 
 */

router.post('/',
    auth,
    [check('todo', 'Enter some text').exists()],
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        try {
            const newTodo = new Todo({
                user: req.user.id,
                todo: req.body.todo
            })
            await newTodo.save();
            res.json({
                newTodo
            })
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    })

/**
 * @PRIVATE_GET_API
 * ! api/todos
 * @description get todos of current logged in user 
 */
router.get('/', auth, async (req, res, next) => {
    try {
        const todo = await Todo.find({
            user: req.user.id
        });
        res.json(todo);
    } catch (err) {
        console.error(err)
        res.status(500).send('server error')
    }
})

module.exports = router;