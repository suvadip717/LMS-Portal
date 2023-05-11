const mongoose = require('mongoose');


const queryAddForm = new mongoose.Schema({
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
    query:{
        type: String,
        required: true
    },
    queryStatus: {
        type: String, 
        enum: ['Pending', 'Resolved', 'UnResolved'],
        default: 'Pending'
    },   
    

})

const Query = mongoose.model('QUERY', queryAddForm);

module.exports = Query;