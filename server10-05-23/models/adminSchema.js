const mongoose = require("mongoose");
// const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keysecret = "chaibasaengineeringcollege"

const adminSchema = new mongoose.Schema({
    userid:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
        minlength: 6
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
adminSchema.pre("save", async function(next){
    if (this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12);
    }

    next()
})

// token generate
adminSchema.methods.generateAuthtoken = async function(){
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
const admindb = mongoose.model("admin", adminSchema)

module.exports = admindb;