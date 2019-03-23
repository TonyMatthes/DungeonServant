import Character from './Character'

export default class Player extends Character {
    constructor(characterObject) {
        super(characterObject)
        this.player = characterObject.player
    }
}