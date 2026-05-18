const todoModel = require('../Model/todoModel');

//crud
const getAllTodos = async (req, res) => {
    try {
        const todo = await todoModel.find();
        return res.status(200).json({
            message: "All Todos",
            data: todo
        });
    } catch (error) {
        return res.status(500).json({ message: err.message });
    }
};

const getOneTodo = async (req, res) => {
    try {
        const { id } = req.params
        const todo = await todoModel.findById(req.params.id);
        return res.status(200).json({
            message: "Todo found",
            data: todo
        });
    } catch (error) {
        return res.status(500).json({ message: err.message });
    }
};

const createTodo = async (req, res) => {
    try {
        const { title, details } = req.body;
        const todo = await todoModel.create({ title, details });
        return res.status(201).json({
            message: "Todo created",
            data: todo
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;
        const todo = await todoModel.findByIdAndUpdate(
            id, 
            { completed },
             { new: true });
        return res.status(200).json({
            message: "Todo updated",
            data: todo
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await todoModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Todo deleted",
            data: todo
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllTodos,
    getOneTodo,
    createTodo,
    deleteTodo,
    updateTodo
};