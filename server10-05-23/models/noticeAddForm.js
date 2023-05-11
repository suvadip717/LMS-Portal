const mongoose = require('mongoose');


const noticeAddForm = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    date:{
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

const Notice = mongoose.model('NOTICE', noticeAddForm);

module.exports = Notice;