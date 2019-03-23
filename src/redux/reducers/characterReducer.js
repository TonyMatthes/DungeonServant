import { combineReducers } from 'redux';
import NPC from '../../gameFunctions/CharacterClasses/NPC';
import Player from '../../gameFunctions/CharacterClasses/Player'

// player holds an array of player character objects
const player = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLAYER_CHARACTERS':
        let playerCharacters = []
        for (let character of action.payload) {
            let newPlayerCharacter = new Player(character)
            playerCharacters.push(newPlayerCharacter)
        }
            return playerCharacters
        default:
            return state;
    }
};

// nonPlayer holds an array of non player characters
const nonPlayer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NON_PLAYER_CHARACTERS':
        let npcs = []
        for (let character of action.payload) {
            let npc = new NPC(character)
            npcs.push(npc)
        }
            return npcs
        default:
            return state;

    };
}
// make one object that has keys player, nonPlayer
// these will be on the redux state at:
// state.characters.player and state.characters.nonPlayer
export default combineReducers({
    player,
    nonPlayer,
});