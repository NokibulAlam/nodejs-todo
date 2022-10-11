const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

// for Create Task
router.route("/create/task")
    .post(todoController.createTask);

// Get Task
router.route("")

// Delete Task
router.route("/task/:taskId")
    .delete(todoController.deleteTask);

router.param("taskId", todoController.taskById);

module.exports = router;