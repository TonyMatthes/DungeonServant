// a basic Character constructor for dummy data

class Character {
    constructor(name, initiativeModifier, isPlayer = false){
        this.name = name;
        this.initiativeModifier = initiativeModifier ;
        this.isPlayer = isPlayer
    }
}

module.exports = Character