const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todos");

router.get("/", todoController.getTodos);
router.post("/createTodo", todoController.createTodo);
router.delete("/deleteTodo", todoController.deleteTodo);
router.put("/markComplete", todoController.markComplete);
router.put("/markIncomplete", todoController.markIncomplete);

module.exports = router; 