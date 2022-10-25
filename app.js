const express = require('express');

const app = express();

//Setting the template language
app.set('view engine', 'pug');


const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
];


app.get('/', (req, res) => {
    res.send('<h1>I love Treehouse!</h1>');
});

app.get('/hello', (req, res) => {
    res.render('Hello');
});

app.get('/pugTest', (req, res) => {
    res.render('pugTest');
});

//Option one to had variables
app.get('/cards',(request, response) => {
    response.render('cards', {prompt : "What is node?", hint : "think about the development ENV" , colors});
})

//alternative option  to had variables
// app.get('/cards',(request, response) => {
//     response.locals= {prompt : "What is node"};
//     response.render('cards', );
// })


app.listen(3009, () => {
    console.log('The application is running on localhost:3000!')
});