const books = require('../books.json')

module.exports.getBooks = (req, res, next)=>{
    res.status(200).json(books.book)  
}

module.exports.getBooksById = (req, res, next)=>{
    const id = req.params.id
    try{
       var count = 0;
        for(let i = 0; i < books.book.length ; i++){ 
           
                if(id == books.book[i].id){
                    count = 1;
                    res.json(books.book[i])
                } 
        }

         if(count == 0 ){
            res.json({
                "message" : "id not found "
            })
         }
    }catch(error){
        next(error)
    }
    
}


module.exports.getStatus = (req, res, next)=>{
    var time = new Date()
    let status =   {
        "status": "OK",
         "time": time,
         "name": "Application Server"
       }
    res.status(200).send(status)  
    
}

