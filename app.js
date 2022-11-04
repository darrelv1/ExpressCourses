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


//for index naming convention, the path doesn't need to be explicit
const indRoutes = require("./routes");
const carRoutes = require ("./routes/cards.js")
const exRoutes = require ("./routes/paraex.js")


app.use(indRoutes)
app.use("/cards",carRoutes)
app.use("/paraex",exRoutes)



//505 Error Creator
app.use((req, res,next)=>{
    console.log("1. every single page")
    const err = new Error("oh noes")
    err.status= 500
    next()
//    next(err)
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