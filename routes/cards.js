const express = require("express")
const router = express.Router();
const { data } = require("../data/flashCardData.json")
const { cards } = data

//Option one to had variables
router.get('/:id',(request, response) => {
    response.render('cards', {
        prompt : cards[request.params.id].question,
        hint : cards[request.params.id].hint
    });
})

module.exports = router