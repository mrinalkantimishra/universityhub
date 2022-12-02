const { default: mongoose } = require("mongoose");



let schema = new mongoose.Schema({
    fname:{type:String, require:true},
    blood:{type:String, require:true},
    email:{type:String, require:true},
    number:{type:Number, require:true},
    password:{type:String,require:true},
})

let user = new mongoose.model("User", schema)

module.exports= user