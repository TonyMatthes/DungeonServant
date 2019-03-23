import rollDice from '../rollDice'
import Character from './Character'
export default class NPC extends Character {
    constructor(characterObject) {
        super(characterObject);
        this.individualName = characterObject.individualName || characterObject.name;
        this.hit_dice = characterObject.hit_dice
        this.armor_class = characterObject.armor_class
        this.challenge_rating = characterObject.challenge_rating
        this.actions = characterObject.actions
        this.special_abilities = characterObject.special_abilities
    }
    static rollHP(hitDice, constModifier) {
        let hpArray = rollDice(hitDice)
        let newHP = hpArray.reduce(
            (accumulator, currentvalue) => accumulator + currentvalue) +
            (constModifier * hitDice.match(/\d+/g)[0])
        if (newHP < 1){
            return 1
        }
        return newHP
    }
}