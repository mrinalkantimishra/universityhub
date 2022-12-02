let mongoose = require('mongoose')

let URI = "mongodb+srv://2021:2021@cluster0.laungy4.mongodb.net/?retryWrites=true&w=majority"
// "mongodb+srv://karthik:2003@cluster0.pdlc9ga.mongodb.net/?retryWrites=true&w=majority"

let connectdb = async()=>{
    try{
    let con = await mongoose.connect(URI,
        {
        useUnifiedTopology : true,
        useNewUrlParser : true
        }

        )
        console.log("database is connected with the given URI")
    }

catch(err){
    console.log(err)
    }
}

module.exports = connectdb