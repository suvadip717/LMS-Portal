const mongoose = require('mongoose');


const student202024 = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    reg_no:{
        type: String,
        require: true
    },

    // email_id:{
    //     type: String,
    //     require: true
    // },
    // registration_no:{
    //     type: String,
    //     require: true
    // },
})

const Student202024 = mongoose.model('2020-24-student', student202024);

module.exports = Student202024;