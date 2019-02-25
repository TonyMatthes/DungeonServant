import { combineReducers } from 'redux';

// player holds an array of player character objects
const player = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLAYER_CHARACTERS':
            return action.payload
        default:
            return state;
    }
};

// nonPlayer holds an array of non player characters
const nonPlayer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NON_PLAYER_CHARACTERS':
            return action.payload
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