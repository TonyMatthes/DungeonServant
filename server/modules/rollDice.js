const rollDice = (numberOfDice = 1, sides = 20) => {
        let results = []
        for (let i=0; i<=numberOfDice-1; i++) {
            results.push(Math.floor((Math.random() * sides) + 1))
        }
        return results
    }
module.exports = rollDice