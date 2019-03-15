import rollDice from './rollDice'

//rollInitiative will take in an array of characters in a conflict,
//roll their initiatives, apply modifiers, and order them accordingly
const rollInitiative = (characters) => {
    let finalList = []
    for (let character of characters) {
        finalList.push({ character, currentInitiative: (Number(rollDice()) + (Math.floor((character.dexterity - 10) / 2))) })
    }
    return (finalList.sort((a, b) =>
        b.currentInitiative === a.currentInitiative ?
            (Math.floor((b.dexterity - 10) / 2)) - (Math.floor((a.dexterity - 10) / 2)) :
            b.currentInitiative - a.currentInitiative))
}

export default rollInitiative