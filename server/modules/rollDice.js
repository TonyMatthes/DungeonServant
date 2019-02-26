const rollDice = (numberOfDice = 1, numberOfSides) => {
    let numArray = [];
    let results = [];
    let parseD20 = /\d+/g;
    !numberOfSides ?
        numArray = numberOfDice.match(parseD20) :
        numArray = [numberOfDice, numberOfSides]
    for (let i = 0; i <= numArray[0] - 1; i++) {
        results.push(Math.floor((Math.random() * numArray[1]) + 1))
    }
    return results
}
module.exports = rollDice