const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema");
const admindb = require("../models/adminSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const fileUpload = require('express-fileupload');
const fs=require("fs")
var path = require('path');

const Notes = require("../models/notesAddForm");
const Questions = require("../models/questionAddForm");
const Notice = require("../models/noticeAddForm");
const Payment = require("../models/paymentAddForm");
const Students = require("../models/allstudent");
const Student202024 = require("../models/student202024");
const Query = require("../models/queryAddForm");
const Complaint = require("../models/complaintAddForm");
const Student202125 = require("../models/student202125");



// app.use(fileUpload());
// For user registration
router.post("/register", async(req, res)=>{
    // console.log(req.body);
    const {firstName, lastName, studentid, email, password} = req.body;
    if(!firstName || !lastName || !studentid || !email || !password){
        res.status(422).json({error:"Fill all the details!"})
    }

    try {

        const preuser = await userdb.findOne({studentid:studentid})
        if(preuser){
            res.status(422).json({error:"This email is Already Exist!"})
        }else{
            const finalUser = new userdb ({
                firstName, lastName, studentid, email, password
            });
            // Here Password Hashing

            const storeData = await finalUser.save();
            // console.log(storeData);
            res.status(201).json({status:201,storeData})

        }
    } catch (error) {
        res.status(422).json(error);
        console.log("Catch Block Error");
    }
});


// User Login
router.post("/login", async(req, res)=>{
    // console.log(req.body);
    const {email, password} = req.body;
    if(!email || !password){
        res.status(422).json({error:"Fill all the details!"})
    }

    try {
        const userValid = await userdb.findOne({email:email});

        if(userValid){
            const isMatch = await bcrypt.compare(password,userValid.password);
            const avtiveUser = "Active";
            const isActive = await  (userValid.userStatus === avtiveUser);
            console.log(isActive)

            if(!isMatch){
                res.status(422).json({ error:"Invalid Details!"})
            }if(!isActive){
                res.status(426).json({status: 426, error:"Inactive User"})
            }
            else{

                // token generate
                const token = await userValid.generateAuthtoken();

                // console.log(token);
                console.log("Login Sucessful!");

                // Cookie Generate
                res.cookie("usercookie", token,{
                    expires:new Date(Date.now()+9000000),
                    httpOnly:true
                });

                const result = {
                    userValid,
                    token
                }
                res.status(201).json({status:201, result})


            }
        }


    } catch (error) {
        res.status(401).json(error);
        console.log("catch block");
    }
});

// user all
router.get("/validuser", authenticate,async(req, res)=>{
    // console.log("Done");
    try {
        const ValidUserOne = await userdb.findOne({_id:req.userId});
        res.status(201).json(ValidUserOne);
    } catch (error) {
        res.status(401).json({status:401, error});
    }
});


// User all data
router.get("/getuserdata/:id", async(req, res) => {
    try {
        console.log(req.params)
        const {id} = req.params;

        const userdataindividual = await userdb.findById({_id:id});
        // console.log(citynameindividual);
        res.status(201).json(userdataindividual);

    } catch (error) {
        res.status(422).json(error);
        
    }
})

// update user data
router.patch("/updateuserdata/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const updateduserdata = await userdb.findByIdAndUpdate(id, req.body,{
            new:true
        });
        console.log(updateduserdata);
        res.status(201).json(updateduserdata);
    } catch (error) {
        res.status(422).json(error);
    }
})





// admn register
router.post("/adminregister", async(req, res)=>{
    // console.log(req.body);
    const {userid, password} = req.body;
    if(!userid || !password){
        res.status(422).json({error:"Fill all the details!"})
    }

    try {

        const preuser = await admindb.findOne({userid:userid})
        if(preuser){
            res.status(422).json({error:"This admin is Already Exist!"})
        }else{
            const finalUser = new admindb ({
                userid, password
            });
            // Here Password Hashing

            const storeData = await finalUser.save();
            // console.log(storeData);
            res.status(201).json({status:201,storeData})

        }
    } catch (error) {
        res.status(422).json(error);
        console.log("Catch Block Error");
    }
});

// admin Login

router.post("/admin", async(req, res)=>{
    // console.log(req.body);
    const {userid, password} = req.body;
    if(!userid || !password){
        res.status(422).json({error:"Fill all the details!"})
    }

    try {
        const userValid = await admindb.findOne({userid:userid});

        if(userValid){
            const isMatch = await bcrypt.compare(password,userValid.password);

            if(!isMatch){
                res.status(422).json({ error:"Invalid Details!"})
            }else{

                // token generate
                const token = await userValid.generateAuthtoken();

                // console.log(token);
                console.log("Login Sucessful!");

                // Cookie Generate
                res.cookie("usercookie", token,{
                    expires:new Date(Date.now()+9000000),
                    httpOnly:true
                });

                const result = {
                    userValid,
                    token
                }
                res.status(201).json({status:201, result})


            }
        }


    } catch (error) {
        res.status(401).json(error);
        console.log("catch block");
    }
});

// user valid
router.get("/validadmin", authenticate,async(req, res)=>{
    // console.log("Done");
    try {
        const ValidUserOne = await admindb.findOne({_id:req.userid});
        res.status(201).json(ValidUserOne);
    } catch (error) {
        res.status(401).json({status:401, error});
    }
});



// User Logout
router.get("/logout", authenticate, async(req, res)=>{
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem)=>{
            return curelem.token !== req.token
        });

        res.clearCookie("usercookie", {path:"/"});
        req.rootUser.save();

        res.status(201).json({status:201})


    } catch (error) {
        res.status(201).json({status:401, error})
    }
})


// All Students
router.get('/allusers', async (req, res)=>{
    try {
        const allstudents = await userdb.find();
        res.status(201).json(allstudents);
        console.log(allstudents);
    } catch (error) {
        res.status(422).json(error);
    }
})



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- --

// All Students
router.get('/allstudents', async (req, res)=>{
    try {
        const allstudents = await Students.find();
        res.status(201).json(allstudents);
        console.log(allstudents);
    } catch (error) {
        res.status(422).json(error);
    }
})

router.get('/student202024', async (req, res)=>{
    try {
        const allstudents = await Student202024.find();
        res.status(201).json(allstudents);
        console.log(allstudents);
    } catch (error) {
        res.status(422).json(error);
    }
})

router.get('/student202125', async (req, res)=>{
    try {
        const allstudents = await Student202125 .find();
        res.status(201).json(allstudents);
        console.log(allstudents);
    } catch (error) {
        res.status(422).json(error);
    }
})

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- --
// Add Notes
router.post('/addnote', async (req, res) => {
    const {name, subject, year, link} = req.body;
    console.log(name, subject, year, link);

    if(!name || !subject || !year || !link){
        // console.log("plz fill the field properly");
        return res.status(422).json({error: "Plz fill the field properly" , status: 422});
    }
    
    try {
       const notesExist = await Notes.findOne({link:link});

       if(notesExist){
        return res.status(422).json({error: "Note already Exist" , status: 422});
        }
        const newnote = new Notes({name, subject, year, link});
        await newnote.save();
            res.status(201).json({message: "New Note added Successfuly" , status: 201})
    }
    catch (err) {
        console.log(err);
    }
    
    
});

// All Notes
router.get('/allnotes', async (req, res) =>{
    try {
        const onenote = await Notes.find();
        res.status(201).json(onenote);
        console.log(onenote);
    } catch (error) {
        res.status(422).json(error);
    }
}); 

// Get Notes Details
router.get("/getnotesdata/:id", async(req, res) => {
    try {
        console.log(req.params)
        const {id} = req.params;

        const querydata = await Notes.findById({_id:id});
        // console.log(citynameindividual);
        res.status(201).json(querydata);

    } catch (error) {
        res.status(422).json(error);
        
    }
})


// Edit Notes
router.patch("/updatenotes/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const updatednotes = await Notes.findByIdAndUpdate(id, req.body,{
            new:true
        });
        console.log(updatednotes);
        res.status(201).json(updatednotes);
    } catch (error) {
        res.status(422).json(error);
    }
})

// delete notes
router.delete("/deletenotes/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const deletenotes = await Notes.findByIdAndDelete({_id:id})
        console.log(deletenotes);
        res.status(201).json(deletenotes);
    } catch (error) {
        res.status(422).json(error);
    }
})

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- --




// Add Questions
router.post('/addquestion', async (req, res) => {
    const {name, subject, year, link} = req.body;
    console.log(name, subject, year, link);

    if(!name || !subject || !year || !link){
        console.log("plz fill the field properly");
        return res.status(422).json({error: "Plz fill the field properly", status: 422});
    }
    
    try {
       const questionsExist = await Questions.findOne({link:link});

       if(questionsExist){
        return res.status(422).json({error: "Question already Exist", status: 422});
        }
        const newquestions = new Questions({name, subject, year, link});
        await newquestions.save();
            res.status(201).json({message: "New Question added Successfuly", status: 201})
    }
    catch (err) {
        console.log(err);
    }
    
    
});
// All Questions
router.get('/allquestions', async (req, res) =>{
    try {
        const onenquestion = await Questions.find();
        res.status(201).json(onenquestion);
        console.log(onenquestion);
    } catch (error) {
        res.status(422).json(error);
    }
}); 
// Get Question Details
router.get("/getquestiondata/:id", async(req, res) => {
    try {
        console.log(req.params)
        const {id} = req.params;

        const questiondata = await Questions.findById({_id:id});
        // console.log(citynameindividual);
        res.status(201).json(questiondata);

    } catch (error) {
        res.status(422).json(error);
        
    }
})

// Edit Question
router.patch("/updatequestion/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const updatequestions = await Questions.findByIdAndUpdate(id, req.body,{
            new:true
        });
        console.log(updatequestions);
        res.status(201).json(updatequestions);
    } catch (error) {
        res.status(422).json(error);
    }
})

// delete questions
router.delete("/deletequestions/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const deletenotes = await Questions.findByIdAndDelete({_id:id})
        console.log(deletenotes);
        res.status(201).json(deletenotes);
    } catch (error) {
        res.status(422).json(error);
    }
})



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- --

// Add Notice
router.post('/addnotice', async (req, res) => {
    const {name, date, year, link} = req.body;
    console.log(name, date, year, link);

    if(!name || !date || !year || !link){
        // console.log("plz fill the field properly");
        return res.status(422).json({error: "Plz fill the field properly", status: 422});
    }
    
    try {
       const questionsExist = await Notice.findOne({link:link});

       if(questionsExist){
        return res.status(422).json({error: "Notice already Exist", status: 422});
        }
        const newquestions = new Notice({name, date, year, link});
        await newquestions.save();
            res.status(201).json({message: "New Notice added Successfuly", status: 201}) 
    }
    catch (err) {
        console.log(err);
    }
    
    
});
// All Notice
router.get('/allnotice', async (req, res) =>{
    try {
        const onenotice = await Notice.find();
        res.status(201).json(onenotice);
        console.log(onenotice);
    } catch (error) {
        res.status(422).json(error);
    }
}); 

// Get notice Details
router.get("/getnoticedata/:id", async(req, res) => {
    try {
        console.log(req.params)
        const {id} = req.params;

        const noticedata = await Notice.findById({_id:id});
        // console.log(citynameindividual);
        res.status(201).json(noticedata);

    } catch (error) {
        res.status(422).json(error);
        
    }
})
// Edit notice
router.patch("/updatenotice/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const updatenotice = await Notice.findByIdAndUpdate(id, req.body,{
            new:true
        });
        console.log(updatenotice);
        res.status(201).json(updatenotice);
    } catch (error) {
        res.status(422).json(error);
    }
})


// delete Notice
// router.delete("/deletenotice/:id", async(req,res)=>{
//     try {
//         const {id} = req.params;
//         const deletenotice = await Notice.findByIdAndDelete({_id:id})
//         console.log(deletenotice);
//         res.status(201).json(deletenotice);
//     } catch (error) {
//         res.status(422).json(error);
//     }
// })

// delete notice
router.delete("/deletenotice/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const deletenotice = await Notice.findByIdAndDelete({_id:id})
        console.log(deletenotice);
        res.status(201).json(deletenotice);
    } catch (error) {
        res.status(422).json(error);
    }
})

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- --



// Add Payment
router.post('/addpayment', async (req, res) => {
    const {name, studentid, semester, date, utrnumber, category, ammount, link} = req.body;
    console.log(name, studentid, semester, date, utrnumber, category, ammount, link);

    if(!name || !studentid || !semester || !date || !utrnumber || !category || !ammount || !link){
        // console.log("plz fill the field properly");
        return res.status(422).json({error: "Plz fill the field properly" , status: 422});
    }
    
    try {
       const notesExist = await Payment.findOne({utrnumber:utrnumber});

       if(notesExist){
        return res.status(422).json({error: "Note already Exist" , status: 422});
        }
        const newnote = new Payment({name, studentid, semester, date, utrnumber, category, ammount, link});
        await newnote.save();
            res.status(201).json({message: "New Note added Successfuly" , status: 201})
    }
    catch (err) {
        console.log(err);
    }
    
    
});

// All Payment
router.get('/allpayment', async (req, res) =>{
    try {
        const onenquestion = await Payment.find();
        res.status(201).json(onenquestion);
        console.log(onenquestion);
    } catch (error) {
        res.status(422).json(error);
    }
}); 

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- ---- -- -- -- -- -- -- --

// Add Query
router.post('/addquery', async (req, res) => {
    const {name, studentid, email, title, query} = req.body;
    console.log(name, studentid, email, title, query);

    if(!name || !studentid || !email || !title || !query){
        // console.log("plz fill the field properly");
        return res.status(422).json({error: "Plz fill the field properly" , status: 422});
    }
    
    try {
    //    const notesExist = await Payment.findOne({query:query});

    //    if(notesExist){
    //     return res.status(422).json({error: "Note already Exist" , status: 422});
    //     }
        const newnote = new Query({name, studentid, email, title, query});
        await newnote.save();
            res.status(201).json({message: "New Note added Successfuly" , status: 201})
    }
    catch (err) {
        console.log(err);
    }
    
    
});

// All Query
router.get('/allquery', async (req, res) =>{
    try {
        const onenquestion = await Query.find();
        res.status(201).json(onenquestion);
        console.log(onenquestion);
    } catch (error) {
        res.status(422).json(error);
    }
}); 

// get full query details

router.get("/getquerydata/:id", async(req, res) => {
    try {
        console.log(req.params)
        const {id} = req.params;

        const querydata = await Query.findById({_id:id});
        // console.log(citynameindividual);
        res.status(201).json(querydata);

    } catch (error) {
        res.status(422).json(error);
        
    }
})

// Edit query
router.patch("/updatequery/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const updatequery = await Query.findByIdAndUpdate(id, req.body,{
            new:true
        });
        console.log(updatequery);
        res.status(201).json(updatequery);
    } catch (error) {
        res.status(422).json(error);
    }
})


// Add complaint
router.post('/addcomplaint', async (req, res) => {
    const {name, studentid, email, title, complaint} = req.body;
    console.log(name, studentid, email, title, complaint);

    if(!name || !studentid || !email || !title || !complaint){
        // console.log("plz fill the field properly");
        return res.status(422).json({error: "Plz fill the field properly" , status: 422});
    }
    
    try {
        const newnote = new Complaint({name, studentid, email, title, complaint});
        await newnote.save();
            res.status(201).json({message: "New Note added Successfuly" , status: 201})
    }
    catch (err) {
        console.log(err);
    }
    
    
});

// All complaint
router.get('/allcomplaint', async (req, res) =>{
    try {
        const onenquestion = await Complaint.find();
        res.status(201).json(onenquestion);
        console.log(onenquestion);
    } catch (error) {
        res.status(422).json(error);
    }
}); 

// get full complaint details

router.get("/getcomplaintdetails/:id", async(req, res) => {
    try {
        console.log(req.params)
        const {id} = req.params;

        const complaintdata = await Complaint.findById({_id:id});
        // console.log(citynameindividual);
        res.status(201).json(complaintdata);

    } catch (error) {
        res.status(422).json(error);
        
    }
})

// Edit complaint
router.patch("/updatecomplaint/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const updatednotes = await Complaint.findByIdAndUpdate(id, req.body,{
            new:true
        });
        console.log(updatednotes);
        res.status(201).json(updatednotes);
    } catch (error) {
        res.status(422).json(error);
    }
})
  

module.exports = router;