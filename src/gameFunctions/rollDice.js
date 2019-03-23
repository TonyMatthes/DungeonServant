const rollDice = (dice = '1d20', advantage) => {
    let numArray = [];
    let results = [];
    let parseD20 = /\d+/g;
    typeof (dice) === 'string' ?
        numArray = dice.match(parseD20) :
        numArray = dice
    for (let i = 0; i <= numArray[0] - 1; i++) {
        if (typeof advantage === 'undefined') {
            results.push(Math.floor((Math.random() * numArray[1]) + 1))
        } else if(advantage === 'advantage'){
            let rolls = [(Math.floor((Math.random() * numArray[1]) + 1)),(Math.floor((Math.random() * numArray[1]) + 1))]
            let sortedRolls = rolls.sort((a, b)=>b-a)
            results.push(sortedRolls[0])
        } else if(advantage==='disadvantage'){
            let rolls = [(Math.floor((Math.random() * numArray[1]) + 1)),(Math.floor((Math.random() * numArray[1]) + 1))]
            let sortedRolls = rolls.sort((a, b)=>a-b)
            results.push(sortedRolls[0])
        }
    }
    // if (results.length < 2) {
    //     return results[0]
    // }
    return results
}

export default rollDice