
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const path = require('path');

//dotenv.config({path:path.join(__dirname, '../config.env')});
//const DB=process.env.MONGO_URL;
//console.log(DB);

module.exports=async()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/monika",
        {
            useNewUrlParser:true,
            // useUnifiedTopology:true,  
        }
        
        )
};


