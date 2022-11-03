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



app.use("/hello", (req,res,next) => {
    console.log("Form Page")
    next()
})

//505 Error Creator
app.use((req, res,next)=>{
    console.log("1. every single page")
    const err = new Error("oh noes")
    err.status= 500
    next()
//    next(err)
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



//404 - has to be at the end of the app
app.use((req, res,next)=>{
    const err = new Error("Not Found");
    err.status= 404;
    next(err);
})

//Error Handler
app.use((err,req,res,next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render("error")
})

app.listen(3001, () => {
    console.log(`The application is running on localhost:${'3001'}!`)
});