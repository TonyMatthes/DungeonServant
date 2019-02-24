const rollDice = require('./rollDice')

//rollInitiative will take in an array of characters in a conflict,
//roll their initiatives, apply modifiers, and order them accordingly
const rollInitiative = (characters) => {
    let finalList = []
    for (let character of characters) {
        finalList.push({ name: character.name, currentInitiative: (Number(rollDice()) + Number(character.initiativeModifier)) })
    }
    return (finalList.sort((a, b) => { return b.currentInitiative - a.currentInitiative }))
}

module.exports = { rollInitiative }