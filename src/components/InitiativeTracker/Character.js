class Character {
    constructor(name, initiativeModifier, isPlayer = false) {
        this.name = name
        this.initiative = (Math.floor((Math.random() * 20) + 1)) //just giving a random value for now
        this.initiativeModifier = initiativeModifier
        this.isPlayer = isPlayer
        this.maxHP = (Math.floor((Math.random() * 40) + 1))
        this.hP = this.maxHP - (Math.floor((Math.random() * 4) + 1))

    }
}

export default Character