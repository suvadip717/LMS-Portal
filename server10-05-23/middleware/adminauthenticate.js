const jwt = require("jsonwebtoken");
const admindb = require("../models/adminSchema");
const keysecret = "jaiprakashkumarsinghaurangabadbh"


const adminauthenticate = async(req, res, next)=>{
    try {
        const token = req.headers.authorization;
        // console.log(token);

        const verifytoken = jwt.verify(token, keysecret);
        // console.log(verifytoken);

        const rootUser = await admindb.findOne({_id:verifytoken._id});
        // console.log(rootuser);

        if(!rootUser){ throw new Error("User not found in the Database")}

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        next();

    } catch (error) {
        res.status(401).json({status:401, message:"Unauthorized token provide"})
    }
}

module.exports = adminauthenticate