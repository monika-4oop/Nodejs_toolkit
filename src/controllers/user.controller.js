
const express=require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router=express.Router();
const User=require('../modals/user.model');
const { send } = require('express/lib/response');
router.get('/', async(req,res)=>{
    try{
    const allusers= await User.find().lean().exec();

    res.status(201).send({users:allusers})
    }catch(err) {
        res.status(401).send("something went wrong")
    }
})



router.post("/login", async (req, res) => {
    try {

         const {username, password , email} = req.body
    
     if(!email){
         res.status(422).json({message:"please filled the email"})
         return
    }

//     if(isValidEmail(email)){
//         res.status(422).json({message:"please validate the email"})
//         return
//    }

    if(!password){
        res.status(422).json({message:"please filled the password"})
        return
   }

   if(!username){
    res.status(422).json({message:"please filled the name"})
    return
   }
   const findemail = await User.findOne({email})
   if(findemail)
   {
    res.status(422).json({message:"email already exists"})
    return
   }

   const findusername = await User.findOne({username})
   if(findusername)
   {
    res.status(422).json({message:"name already exists"})
    return
   }
   const user  = await User.create({
       username,
       email,
       password,
   })
    
  
       res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  
})


// router.post("/login",async (req,res)=>{
//    const {email,password}=  User.req.body
  
//    try{

//     if(!email || !password){
//      return res.status(404).json({err:"please filled the data"})
//     }
     
//     const userlogin= await User.findOne({email:email});

//     if(userlogin){

//         const ismatch =await bcrypt.compare(password,userlogin.password)
    
//         let token = await userlogin.generateAuthToken();

//  console.log(token)

//     res.cookie("jwtoken",token,{
//         expires: new Date(Date.now()+2500000451),
//         httpOnly: true
//     });



//         if(!ismatch){
//             res.status(404).json({err:"invalid credentials"})
//         }
//        else{
//            res.status(200).json({message:"signin succesfull"})
//        }

//     }else{
//         res.status(404).json({err:"invalid credentials"})
//     }
//       console.log(userlogin)
//    }catch(err){
//        res.status(404).json({err:"something went wrong"})
//    }



// })























module.exports =router;