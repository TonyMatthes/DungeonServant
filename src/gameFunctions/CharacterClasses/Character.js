import rollDice from '../rollDice'

export default class Character {
    constructor(characterObject) {
        this.name = characterObject.name;
        this.hit_points = characterObject.hit_points;
        this.current_hit_points = characterObject.current_hit_points || characterObject.hit_points;
        this.currentInitiative = 100;
        this.abilityScores = {
            strength: { value: characterObject.strength || characterObject.abilityScores.strength.value},
            constitution: { value: characterObject.constitution || characterObject.abilityScores.constitution.value},
            dexterity: { value: characterObject.dexterity || characterObject.abilityScores.dexterity.value},
            charisma: { value: characterObject.charisma || characterObject.abilityScores.charisma.value},
            wisdom: { value: characterObject.wisdom || characterObject.abilityScores.wisdom.value},
            intelligence: { value: characterObject.intelligence || characterObject.abilityScores.intelligence.value},
        }
        for (let ability in this.abilityScores) {
            this.abilityScores[ability].modifier = (Math.floor((this.abilityScores[ability].value - 10) / 2))
        }
    }
    abilityCheck(ability, advantage) {
        let roll = (rollDice('1d20', advantage))  
        return roll[0] + this.abilityScores[ability].modifier
    }
    setInitiative(initiative) {
        this.currentInitiative = initiative
    }
    modifyAbility(ability, bonus) {
        this.abilityScores = {
            ...this.abilityScores,
            [ability]: { ...this.abilityScores[ability], modifier: this.abilityScores[ability].modifier + bonus }
        }
    }
    setHP(value) {
        value > this.hit_points ? console.log("can't raise hp higher than max") :
            this.current_hit_points = value
    }
    attack(targetCharacter, attack_bonus, advantage) {
        let attackRoll = rollDice('1d20', advantage)
        if (attackRoll + attack_bonus >= targetCharacter.armor_class) {
            return true
        }
    }
    static damage(targetCharacter, damage_dice, damage_bonus) {
        let damageRoll = rollDice(damage_dice)
        console.log('damage roll: ' + damageRoll)
        let totalDamage = damageRoll + damage_bonus
        targetCharacter.setHP(targetCharacter.current_hit_points - totalDamage)
    }
    attackAndDamage(targetCharacter, attack_bonus, damage_dice, damage_bonus, advantage) {
        let attack = this.attack(targetCharacter, attack_bonus, advantage);
        if (attack === true) { this.damage(targetCharacter, damage_dice, damage_bonus) }
    }
}

// class NPC extends Character {
//     constructor(characterObject, individualName) {
//         super(characterObject);
//         this.individualName = individualName
//         this.hit_dice = characterObject.hit_dice
//         this.armor_class = characterObject.armor_class
//         this.challenge_rating = characterObject.challenge_rating
//         this.actions = characterObject.actions
//         this.special_abilities = characterObject.special_abilities
//     }
//     rollHP() {
//         let hpArray = rollDice(this.hit_dice)
//         let newHP = hpArray.reduce(
//             (accumulator, currentvalue) => accumulator + currentvalue) +
//             (this.abilityScores.constitution.modifier * this.hit_dice.match(/\d+/g)[0])
//         this.hit_points = newHP
//         this.current_hit_points = newHP
//     }
// }

// class Player extends Character {
//     constructor(characterObject) {
//         super(characterObject)
//         this.player = characterObject.player
//     }
// }
