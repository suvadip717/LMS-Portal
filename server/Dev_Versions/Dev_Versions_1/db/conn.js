const mongoose = require("mongoose");

const DB = "mongodb+srv://admin:pass@cluster0.uii3awi.mongodb.net/cse_detabase?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("Database Connection Sucessful!")).catch((err)=>{
    console.log(err);
})