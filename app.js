const express = require('express');

//Middleware parsers
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');

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



app.get('/', (req, res) => {
    res.send('<h1>I love Treehouse!</h1>');
});

app.get('/hello', (req, res) => {
    //Cookies being read from the browser here
    res.render('Hello', req.cookies.username);
});


app.post('/hello', (req, res) => {
    //Sending a cookie to the browser after we submit a form, the cookie define/create in this line
    res.cookie("username", req.body.username)
    res.render('Hello', {name : req.body.username});
});

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
    console.log(`The application is running on localhost:${'3002'}!`)
});