const mongoose = require('mongoose');


const paymentAddForm = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    studentid:{
        type: String,
        required: true
    },  
    semester:{
        type: String,
        required: true
    }, 
    date:{
        type: String,
        required: true
    }, 
    utrnumber:{
        type: String,
        required: true
    },  
    category:{
        type: String,
        required: true
    }, 
    ammount:{
        type: String,
        required: true
    },  
    link:{
        type: String,
        required: true
    }
    

})

const Payment = mongoose.model('PAYMENT', paymentAddForm);

module.exports = Payment;