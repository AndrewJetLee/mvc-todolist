const Todo = require("../models/Todo")

module.exports = {
    getTodos: async (req, res) => {
        try {
            let todos = await Todo.find();
            let incompleteCount = await Todo.countDocuments({completed: false});
            res.status(200).render("todos.ejs", {todos: todos, count: incompleteCount});
        } catch (err) {
            res.status(400).send(err);
        }
    }, 
    createTodo: async (req, res) => {
        try {   
            let createdTodo = await Todo.create(req.body);
            res.status(200).redirect("/todos");
        } catch (err) {
            res.status(500).send(err);
        }
    },
    deleteTodo: async (req, res) => {
        try {
            await Todo.deleteOne({_id: req.body.todoId});
            res.status(200).send("Successfully Deleted Todo with id" + req.body.todoId);
        } catch (err) {
            res.status(500).send(err);
        }
    }
} 