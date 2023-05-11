const mongoose = require('mongoose');


const allstudent = new mongoose.Schema({
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
    // registration_no:{
    //     type: String,
    //     require: true
    // }
})

const Students = mongoose.model('2019-23-student', allstudent);

module.exports = Students;