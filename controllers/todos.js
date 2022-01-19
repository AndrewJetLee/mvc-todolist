const Todo = require("../models/Todo")

module.exports = {
    getTodos: async (req, res) => {
        try {
            let Todos = await Todo.find();
            res.json(Todos);
        } catch (err) {
            res.status(400).send(err);
        }
    }
}