const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");



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
router.get("/validuser", authenticate,async(req, res)=>{
    // console.log("Done");
    try {
        const ValidUserOne = await userdb.findOne({_id:req.userId});
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

module.exports = router;