const express = require("express")
const router = express.Router();
const { data } = require("../data/flashCardData.json")
const { cards } = data

//Option one to had variables
router.get('/:id',(request, response) => {
    const { id } = request.params
    const { side } = request.query
    const { hint } = cards[id];
    const text = cards[id][side]

    const templateData = {text , hint }
    response.render('cards', templateData);
})

module.exports = router