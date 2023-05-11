const mongoose = require('mongoose');


const complaintAddForm = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    studentid:{
        type: String,
        required: true
    },  
    email:{
        type: String,
        required: true
    }, 
    title:{
        type: String,
        required: true
    }, 
    complaint:{
        type: String,
        required: true
    },
    complaintStatus: {
        type: String, 
        enum: ['Pending', 'Resolved', 'UnResolved'],
        default: 'Pending'
    }, 
    

})

const Complaint = mongoose.model('COMPLAINT', complaintAddForm);

module.exports = Complaint;