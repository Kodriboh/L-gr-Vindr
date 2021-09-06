// Example Model

const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: {
        type: String ,
        required: true,
    },
    type: {
        enum: ['object', 'array', 'class'],
    }
});

const Model = mongoose.model('Model', modelSchema);

module.exports = Model;