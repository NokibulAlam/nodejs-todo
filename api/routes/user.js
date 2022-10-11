const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

// for Create Task
router.route("/create/task")
    .post(todoController.createTask);

// Get All Task
router.route("/tasks")
    .get(todoController.showTasks);

// Get Single Task
router.route("/task/:taskId")
    .get(todoController.showSingleTask);

// Delete Task
router.route("/task/:taskId")
    .delete(todoController.deleteTask)
    .put(todoController.updateTask);

router.param("taskId", todoController.taskById);

module.exports = router;