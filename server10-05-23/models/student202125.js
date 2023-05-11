const mongoose = require('mongoose');


const student202125 = new mongoose.Schema({
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

const Student202125 = mongoose.model('2021-25-student', student202125);

module.exports = Student202125;