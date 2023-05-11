const express = require("express");
const app = express();
const port = 8009;
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser");
const fileUpload = require('express-fileupload');

// const notes = require("./routes/notes");

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})


app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(router);
app.use(cookiParser());
app.use(fileUpload());

// app.use(notes);
// app.use(fileUpload({
//     useTempFiles : true,
//     limits:{fileSize:5*1024*1024}
    
// }))
// app.use(NotesUploadRoute);

app.get('/test', function(req, res) {
    res.json({ message: 'WELCOME' });   
});

app.listen(port, ()=>{
    console.log(`Server started at port no: ${port}`);
})