const express = require('express')
const route = express.Router();


route.get('/', (req, res) => {
    const name = req.cookies.username

    console.dir(name ? "true": "false")
    if (name){
        res.render('index', {name})}
    else{
        res.redirect("/hello")
    }
});


route.get('/hello', (req, res) => {
    //Cookies being read from the browser here
    const name = req.cookies.username
    if (name){
        res.redirect('/')
    } else{
        res.render('Hello');
    }
});

route.post('/hello', (req, res) => {
    //Sending a cookie to the browser after we submit a form, the cookie define/create in this line
    res.cookie("username", req.body.username)
    res.redirect("/")
});

route.post('/goodbye', (req, res)=>{
    res.clearCookie("username")
    res.render('cookies')
    //res.redirect("/hello")
})

route.get('/goodbye', (req, res)=>{
    res.redirect("/")
})

route.get('/pugTest', (req, res) => {
    res.render('pugTest');
});



route.get("/sandbox", (req, res)=> {
    res.render('playtown',{ myName, answer, Table});
})

module.exports = route