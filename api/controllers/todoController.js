const Todo = require('../models/Todo');


// Find Task By Id
exports.taskById = (req, res, next, id) => {
    Todo.findById(id)
        .exec((err, task) => {
            if(err || !task){
                return res.status(400).json({
                    error: "Task Not Found"
                });
            } 
            req.task = task;
            next();
        });
};



// Show a Single Task
exports.showSingleTask = (req, res, next) => {
    return res.json(req.task);
};



// Show All Tasks
exports.showTasks = (req, res, next) => {
    Todo.find()
        .exec((err, result) => {
            if(err) {
                return res.status(400).json(err);
            }
            return res.json(result);
        });
};



// Create Task
exports.createTask = (req, res, next) => {
    const task = new Todo(req.body);

    task.save((err, result) => {
        if(err) return res.status(400).json(err);

        return res.status(200).json({task});
    });
};


// Delete Task
exports.deleteTask = (req, res, next) => {
    const task = req.task;

    task.remove((err, result) => {
        if(err) if(err) return res.status(400).json(err);

        return res.status(200).json({message: "Task Deleted Successfully"});
    });
};


// Update Task
exports.updateTask = (req, res, next) => {
    const task = req.task;
    task.name = req.body.name;

    task.save((err, result) => {
        if(err) return res.status(400).json(err);

        return res.status(200).json(result);
    });
}