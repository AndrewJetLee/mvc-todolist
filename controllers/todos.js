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
    } 
}