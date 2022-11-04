const express = require("express")
const router = express.Router();

//Option one to had variables
router.get('/',(request, response) => {
    response.render('cards', {prompt : "What is node?", hint : "think about the development ENV" });
})

module.exports = router