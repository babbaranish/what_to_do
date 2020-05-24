const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo.model');
const auth = require('../../middlewares/auth');
/**
 * !Express-Validator
 */
const { check, validationResult } = require('express-validator');
/**
 * @PRIVATE_POST_API
 * ! api/todos
 * @description create new todo
 */

router.post(
    '/',
    auth,
    [check('todo', 'Enter some text').exists()],
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
            await newTodo.save();
            res.json({
                newTodo,
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    },
);

/**
 * @PRIVATE_GET_API
 * ! api/todos
 * @description get todos of current logged in user
 */
router.get('/', auth, async (req, res, next) => {
    try {
        const todo = await Todo.find({
            user: req.user.id,
        });
        res.json(todo);
    } catch (err) {
        console.error(err);
        res.status(500).send('server error');
    }
});

/**
 * @PRIVATE_GET_API
 * ! api/todos
 * @description get todos of current logged in user by id
 */

router.get('/:id', auth, async (req, res, next) => {
    const toDoId = req.params.id;
    try {
        const todo = await Todo.findById(toDoId);
        if (!todo) {
            return res.status(400).json({
                msg: 'No todo found',
            });
        }
        res.json(todo);
    } catch (err) {
        console.log(err);
        res.status(500).send('server error');
    }
});

/**
 * @PRIVATE_DELETE_API
 * ! api/todos
 * @description Delete Todo of specifice ID
 */

router.delete('/:id', auth, async (req, res, next) => {
    const toDoId = req.params.id;
    try {
        const todo = await Todo.findByIdAndDelete({
            _id: toDoId,
        });
        if (!todo) {
            return res.status(400).json({
                msg: 'No todo found',
            });
        }
        res.json({
            msg: 'Deleted successfully',
        });
    } catch (err) {
        res.status(500).send('server error');
    }
});

/**
 * @PRIVATE_UPDATE_API
 * ! api/todos
 * @description Update Todo of specifice ID
 */

router.put(
    '/:id',
    auth,
    check('todo', 'Enter some text').exists(),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        try {
            const toDoId = req.params.id;
            const todo = await Todo.findOneAndUpdate(
                {
                    _id: toDoId,
                },
                {
                    $set: {
                        todo: req.body.todo,
                    },
                },
            );
            if (!todo) {
                return res.status(400).json({
                    msg: 'No todo found',
                });
            }
            res.json({
                msg: 'updated successfully',
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    },
);

/**
 * @PRIVATE_UPDATE_API
 * ! api/todos
 * @description set isCompleted to True of Todo with specifice ID
 */

router.patch('/:id', auth, async (req, res, next) => {
    try {
        const toDoId = req.params.id;
        const todo = await Todo.findOneAndUpdate(
            {
                _id: toDoId,
            },
            {
                $set: {
                    isCompleted: req.body.isCompleted || false,
                    isActive: req.body.isActive || true,
                },
            },
        );
        if (!todo) {
            return res.status(400).json({
                msg: 'No todo found',
            });
        }
        res.json({
            msg: 'updated successfully',
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});
module.exports = router;
