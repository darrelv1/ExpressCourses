const express = require('express');

//Middleware parsers
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const {request} = require("express");

const app = express();

//Setting the template language
app.set('view engine', 'pug');


//body parser OLD WAY
//app.use(bodyparser.urlencoded({extended: false}));

// middleware for parsing http payloads
app.use(express.urlencoded());
app.use(cookieparser())


//Sandbox Variables
const Table = {
    Mateo : "Son",
    Marietta : "Mother",
    Claudia : "Girlfriend",
    Darrel : "Me",
}

const myName = "Darrel Valdiviezo"
const answer = Table.Mateo === "Ssdfson"



app.use("/goodbye", (req, res,next)=>{
    console.log("1. every single page")
    next()
}, (req, res,next)=> {
    console.log("2. Second thing on every single page")
    next();
})

app.use("/", (req,res,next) => {
    console.log("home page")
    next()
})
app.use("/hello", (req,res,next) => {
    console.log("Form Page")
    next()
})




app.get('/', (req, res) => {
    const name = req.cookies.username
    console.dir(name ? "true": "false")
    if (name){
         res.render('index', {name})}
    else{
        res.redirect("/hello")
    }
});

app.get('/hello', (req, res) => {
    //Cookies being read from the browser here
    const name = req.cookies.username
    if (name){
        res.redirect('/')
    } else{
        res.render('Hello');
    }
});

app.post('/hello', (req, res) => {
    //Sending a cookie to the browser after we submit a form, the cookie define/create in this line
    res.cookie("username", req.body.username)
    res.redirect("/")
});

app.post('/goodbye', (req, res)=>{
    res.clearCookie("username")
    res.render('cookies')
    //res.redirect("/hello")
})

app.get('/goodbye', (req, res)=>{
    res.redirect("/")
})

app.get('/pugTest', (req, res) => {
    res.render('pugTest');
});

//Option one to had variables
app.get('/cards',(request, response) => {
    response.render('cards', {prompt : "What is node?", hint : "think about the development ENV" });
})

app.get("/sandbox", (req, res)=> {
    res.render('playtown',{ myName, answer, Table});
})

//alternative option  to had variables
// app.get('/cards',(request, response) => {
//     response.locals= {prompt : "What is node"};
//     response.render('cards', );
// })


app.listen(3001, () => {
    console.log(`The application is running on localhost:${'3001'}!`)
});