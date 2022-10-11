const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true, 
        maxLength: 55,
    }
}, {timestamps: true});

module.exports = mongoose.model("todo", todoSchema);