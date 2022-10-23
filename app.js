const express = require('express');

const app = express();

//Setting the template language
app.set('view engine', 'pug');



app.get('/', (req, res) => {git
    res.send('<h1>I love Treehouse!</h1>');
});

app.get('/hello', (req, res) => {
    res.render('Hello');
});

app.get('/pugTest', (req, res) => {
    res.render('pugTest');
});


app.listen(3009, () => {
    console.log('The application is running on localhost:3000!')
});