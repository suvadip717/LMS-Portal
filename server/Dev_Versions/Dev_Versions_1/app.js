const express = require("express");
const app = express();
const port = 8009;
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser");
// const cors = require("cors");

// app.get("/", (req, res)=>{
//     res.status(201).json("Server Created")
// });


app.use(express.json());
app.use(cors());
// app.use(cors());
app.use(router);
app.use(cookiParser());

app.listen(port, ()=>{
    console.log(`Server started at port no: ${port}`);
})