let express = require("express")
let path = require("path")
let app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));

let connectdb = require("./connection/connetdb.js")
connectdb()

app.set ("view engine", "ejs")
app.set("views", path.join(__dirname, "../../ejs/views"))

const User = require("./model/wbmodel.js")


app.get("/", (req,res)=>{
    
    res.render("signup.ejs")
})

app.listen(3000,()=>{
    console.log('server is connected.... ')
})


// let saveDoc = require("./model/wbmodel.js")
// saveDoc()
