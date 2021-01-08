const express = require('express')
const bodyparser = require('body-parser')
const booksDetails = require('./routes/books')

require('dotenv').config();

//setup express application
const app = express();

const port = process.env.port

//Parse incoming requests data
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/books', (req,res,next)=>{
try{
    booksDetails.getBooks(req,res,next)
}catch(error){
    next(error)
}
})

app.get('/books/:id', (req,res,next)=>{
     try{
        booksDetails.getBooksById(req,res,next)
     }catch(error){
        next(error)
    }
  })

app.get('/status', (req,res,next)=>{
        try{
            booksDetails.getStatus(req,res,next)
        }catch(error){
            next(error)
        }
   })

app.listen(port,()=>{
    console.log(`server running on port ${port} `)
})

module.exports = app;