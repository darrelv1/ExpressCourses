const express = require("express")
const router = express.Router();
const { data } = require("../data/flashCardData.json")
const { cards } = data


//Option one to had variables
router.get('/:id',(request, response) => {
    const { id } = request.params
    const { side } = request.query
    const { hint } = cards[id];
    let optiontext = "question"
    const text = cards[id][side]
    const name = request.cookies.username
    const templateData = {text,optiontext,name }

    if (side === "question" ) {
        templateData.hint = hint
        optiontext = "answer";
        templateData.optiontext = optiontext
    } else if (!side) {
        optiontext = "question"
        templateData.optiontext = optiontext
        response.redirect(`http://localhost:3001/cards/${id}?side=${optiontext}`)
    }

    let hyperlink = `http://localhost:3001/cards/${id}?side=${optiontext}`
    templateData.hyperlink = hyperlink

    console.log(hyperlink)
    response.render('cards', templateData);
})

router.get('/', (req, res)=> {
    const rand = () =>  Math.floor(Math.random()* cards.length);
    let redirectLink = `http://localhost:3001/cards/${rand()}`;
    res.redirect(redirectLink)
})


module.exports = router
