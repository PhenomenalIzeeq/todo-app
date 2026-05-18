const express= require('express');
const router = express.Router();
const { getAllTodos, getOneTodo, createTodo, updateTodo, deleteTodo } = require('../Controller/todoController');

router.get('/todos', getAllTodos);
router.get('/todos/:id', getOneTodo);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;