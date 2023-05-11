const mongoose = require('mongoose');


const questionAddForm = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        require: true
    },
    year:{
        type: String,
        require: true
    },
    link:{
        type: String,
        require: true
    }
})

const Questions = mongoose.model('QUESTION', questionAddForm);

module.exports = Questions;