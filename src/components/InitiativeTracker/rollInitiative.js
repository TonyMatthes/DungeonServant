import rollDice from '../../gameFunctions/rollDice'

//rollInitiative will take in an array of characters in a conflict,
//roll their initiatives, apply modifiers, and order them accordingly
const rollInitiative = (characters) => {
    let finalList = []
    for (let character of characters) {
        finalList.push({character, currentInitiative: (Number(rollDice()) + Number(character.initiativeModifier)) })
    }
    return (finalList.sort((a, b) =>  b.currentInitiative === a.currentInitiative?b.initiativeModifier-a.initiativeModifier:b.currentInitiative-a.currentInitiative ))
}

export default rollInitiative