import {combineReducers} from 'redux';
import rollInitiative from '../../gameFunctions/rollInitiative';

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
    return {
      ...state,
      battleOrder: rollInitiative(state.encounterCharacters)
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
    default: 
    return state;
 }
}

export default combineReducers({
  mode,
  manager,
});