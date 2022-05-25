
const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const UserSchema= new mongoose.Schema({
    // createdby:{type:"string",required:"true"},
 username:{type :"string",required:"true"},
 email:{type:"string",required:"true"},
 password:{type:"string",required:"true"}

},{
    versionKey:false,
    timestamps:true
})





// UserSchema.pre("save", async function(next){
//     console.log("password hashed")
//        if(this.isModified("password")){
//            this.password= await bcrypt.hash(this.password,10);
          
//        }
//        next();
//    });
   
   
//    UserSchema.methods.generateAuthToken = async function(){
   
//        try{
//            let generatedtoken =jwt.sign({_id:this._id},process.env.SECRET_KEY)
//          this.tokens=this.tokens.concat({token:generatedtoken});
       
//          await this.save();
//          return generatedtoken;
//        }
//        catch(err){
//            console.error(err);
//        }
//    }   
   
   
   


  const User=mongoose.model("user",UserSchema);
  module.exports = User;
