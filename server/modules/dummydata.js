//some mock player and NPC data
//this will be in a database with much more data eventually
//but we're just working on the initiative thing for MVP

const Character = require('./Character');
let playerNames=['Tony','Eric','Bruno','Alex', 'Vince'];
let initiativeValues = [1,0,-1,-2,3];

const createPlayers = (playerNames, initiativeValues)=>{
    let list = []
    for (let i=0; i<=playerNames.length-1;i++){
        let pc = new Character(playerNames[i],initiativeValues[i],true)
        list.push(pc)
    }
    return list;
}

const players = createPlayers(playerNames, initiativeValues)

//creates random npcs with random initiative values -5 to 5
const createNPCs =(numberOfNPCs)=>{
    let list = []
    for (let i=0; i<=numberOfNPCs -1; i++){
        let randomNum = Math.floor((Math.random() * 11) + -5)
        let npc = new Character(`bandit ${i+1}`, randomNum )
        list.push(npc)
    }
    return list;
}

const npcs = createNPCs(12)

module.exports = {
    players,
    npcs,
}

