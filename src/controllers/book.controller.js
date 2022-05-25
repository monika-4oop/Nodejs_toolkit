
const express=require('express');

const router=express.Router();
const Book=require('../modals/book.model')
const User=require('../modals/user.model');

router.get('/', async(req,res)=>{
    const page=+req.query.page ||1;
    const size=+req.query.size||10;
    const offset=(page-1)*size;
    const books =await Book.find({}).skip(offset).limit(size).lean().exec();

    const totalpages=Math.ceil((await Book.find({}).countDocuments().lean().exec())/size)

  console.log(+totalpages,"total")
  res.status(201).send({allbooks: books,totalpages});
})

router.post("/add", async (req,res)=>{
      try{
    // const newbook= await Book.create(req.body)
  //  res.status(201).json({data:newbook})
  const {name, price , author , createdby} = req.body
  

   const book = await Book.create({
    name,
    price,
    author,
    createdby,
})
 

    res.status(201).send(book);

      }catch(err){
        res.status(404).json({err:"something went wrong"})
    }
})


router.put("/:id" ,async(req, res)=>{

    try{
       
      const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true} )

    res.status(201).send(book)
  }catch(err) {
    res.status(404).json({err:"something went wrong"})

    }


})


router.delete("/:id", async(req,res)=>{
    const removebook= await Book.findByIdAndDelete({_id:req.params.id});
    res.send(removebook)
})

router.get("/filter-by-auther", async(req,res)=>{
  const book= await Book.find().sort({author:1})
  res.send(book)
})



router.get('/' , async (req, res) => {
  try{
      const page = +req.query.page || 1;
      const size = +req.query.size || 10;

      const skip = (page-1)* size;

      const books = await Book.find().skip(skip).limit(size).lean().exec();
      
      const totalPages = Math.ceil( (await Book.find().countDocuments())  / size);

      return res.json( {books , totalPages});

  }catch(err){
       return res.status(500).json({status:"failed" ,  message: err.message});
  }
});



module.exports =router;