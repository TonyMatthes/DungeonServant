const encounterManagerMode = (state = 'planner', action) => {
    switch (action.type) {
      case 'SET_ENCOUNTER_MODE':
        return action.payload;
      default:
        return state;
    }
  };
// loginMode will be on the redux state at:
// state.loginMode
  export default encounterManagerMode;