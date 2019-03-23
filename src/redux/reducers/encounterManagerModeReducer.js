import {combineReducers} from 'redux';
import rollInitiative from '../../gameFunctions/rollInitiative';
import characterReducer from './characterReducer';

const mode = (state = 'planner', action) => {
  switch (action.type) {
    case 'SET_ENCOUNTER_MODE':
      return action.payload;
    default:
      return state;
  }
};

const initialManagerState = {
  battleOrder: null,
  encounterCharacters: [],
}

const manager = (state = initialManagerState, action) => {
  switch (action.type) {
    case 'SET_BATTLE_ORDER':
    let finalList= []
    for (let character of state.encounterCharacters){
       let roll = character.abilityCheck('dexterity')
       character.setInitiative(roll)
       finalList.push(character)
    }
    finalList.sort((a, b) =>
        b.currentInitiative === a.currentInitiative ?
            b.abilityScores.dexterity.modifier - a.abilityScores.dexterity.modifier :
            b.currentInitiative - a.currentInitiative)

    return {
      ...state,
      battleOrder: finalList
    }
    case 'TAKE_TURN':
    const newOrder = state.battleOrder.concat((state.battleOrder.splice(0, 1)))
    return{
      ...state,
      battleOrder: newOrder
    }
    case 'SET_BATTLE_PARTICIPANTS':
    return{
      ...state,
      encounterCharacters: action.payload
    }
    case 'CLEAR_BATTLE_ORDER':
    return{
      ...state,
      battleOrder:null
    }
    case 'IS_DEAD':
    let newList = state.battleOrder.filter(character => character!== action.payload)
    return{
      ...state,
      battleOrder: newList
    }
    default: 
    return state;
 }
}

export default combineReducers({
  mode,
  manager,
});