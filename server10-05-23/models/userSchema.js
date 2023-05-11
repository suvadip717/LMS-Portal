const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keysecret = "jaiprakashkumarsinghaurangabadbh"

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    studentid:{
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not Valid Email")
            }
        }
    },
    password:{
        type: String,
        require: true,
        minlength: 6
    },
    userStatus: {
        type: String, 
        enum: ['Pending', 'Active', 'InActive'],
        default: 'Pending'
    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
});



// Password Hashing
userSchema.pre("save", async function(next){
    if (this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12);
    }

    next()
})

// token generate
userSchema.methods.generateAuthtoken = async function(){
    try {
        let _token = jwt.sign({_id:this._id},keysecret,{
            expiresIn: "1d"
        });

        this.tokens = this.tokens.concat({token:_token});
        await this.save();
        return _token;
    } catch (error) {
        res.status(422).json(error)
    }
}

// Creating Model
const userdb = mongoose.model("users", userSchema)

module.exports = userdb;