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
            req.profile = task;
            next();
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

}