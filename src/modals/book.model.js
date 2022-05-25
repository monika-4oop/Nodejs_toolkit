
const mongoose = require('mongoose');
const User=require('./user.model.js');

const BookSchema=new mongoose.Schema({
 name:{type:"string",required:"true"},
 price:{type:"number",required:"true"},
 author:{type:"string",required:"true"},
 createdAt: {
    type: Date,
    default: Date.now,
  },
  createdby : {
      type:"string",
      required:"true"

  }

});


const Book=mongoose.model("book",BookSchema);
module.exports = Book;