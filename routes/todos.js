const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todos");

router.get("/", todoController.getTodos);
router.post("/createTodo", todoController.createTodo);
router.delete("/deleteTodo", todoController.deleteTodo);

module.exports = router; 