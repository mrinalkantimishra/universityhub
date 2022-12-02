let express = require("express")
let path = require("path")
let app = express()


app.set ("view engine", "ejs")
app.set("views", path.join(__dirname, "../ejs/views"))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("home")
})
app.get("/profile.ejs", (req,res)=>{
    res.render("profile", {
        "name": "Karthik",
        "ID":"21275",
        "number":"9490597049",
        "roll":"210C2030066",
        "year":"2021",
        "gender":"Male",
        "branch":"Btech",
        "blood":"O+"
    })
})

app.get("/social.ejs", (req,res)=>{
    res.render("social", {
        "name1": "Mrinal",
        "matter1":"Welcome MBA 2022",
        "matter2":"PARTY TIME",
        "name2":"Harsh",
    })
     
})

app.get("/home.ejs", (req,res)=>{
    res.render("home")
})

app.get("/post.ejs", (req,res)=>{
    res.render("post")
})

app.get("/signup.ejs", (req,res)=>{
    res.render("signup")
})

app.get("/login.ejs", (req,res)=>{
    res.render("login.ejs")
})

app.get("/news.ejs", (req,res)=>{
    res.render("news")
})

app.get("/faculty.ejs", (req,res)=>{
    res.render("faculty")
})

app.listen("3000", ()=>{
    console.log("connected to server....")
    console.log(__dirname)    
    console.log(path.join(__dirname, "../ejs/views"))
})


