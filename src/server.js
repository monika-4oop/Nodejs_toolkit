
const express= require('express');
const app= express();
const connect= require('./configs/db');
const path= require("path");
 const dotenv= require("dotenv");
 //dotenv.config({path:path.join(__dirname, './config.env')});
 //const port=process.env.PORT 
const Usercontroller= require("./controllers/user.controller")
const Bookcontroller=require("./controllers/book.controller.js")

app.use(express.json());
app.use(express.static(__dirname));

app.use("/user",Usercontroller)

app.use("/book",Bookcontroller)






console.log("hello");
app.listen(2090, async(req,res)=>{
    await connect();
    console.log(`listening on 2090`);
});

//${port}