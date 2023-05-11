const mongoose = require('mongoose');


const notesAddForm = new mongoose.Schema({
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

const Notes = mongoose.model('NOTE', notesAddForm);

module.exports = Notes;