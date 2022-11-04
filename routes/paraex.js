const express = require("express");
const router = express.Router();
const { data } = require("../data/Example.json")
const { cards } = data


router.get("/:id", (req, res) => {
    const { id } = req.params;
    const { side } = req.query;
    const quesAns = cards[id][side];
    const { clue } = cards[id];
    const { name } = cards[id];

    const templateData= { name, quesAns, clue }

    console.log(side)
    res.render("paraEx", templateData )

})

module.exports = router;