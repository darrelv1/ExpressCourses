const express = require('express');
const bodyparser = require('body-parser')

const app = express();

//Setting the template language
app.set('view engine', 'pug');


//body parser
app.use(bodyparser.urlencoded({extended: false}));

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
    res.render('Hello');
});

app.post('/hello', (req, res) => {
    console.dir(req.body)
    res.render('Hello');
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
    console.log(`The application is running on localhost:${'3001'}!`)
});