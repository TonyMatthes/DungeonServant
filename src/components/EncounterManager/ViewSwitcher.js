import React from 'react';
import { connect } from 'react-redux';
import EncounterPlanner from './EncounterPlanner';
import InitiativeTracker from './InitiativeTracker';
import PlayerDetail from './PlayerDetail';
import SavedEncounters from './SavedEncounters';


const ViewSwitcher = (props) => {
    const {
        // Alias prop 'component' as 'ComponentToProtect'
        mode,
        ...otherProps
    } = props
    switch (props.mode) {
        case 'planner':
            return <EncounterPlanner {...otherProps} />;
        case 'tracker':
            return <InitiativeTracker {...otherProps} />;
        case 'player':
            return <PlayerDetail {...otherProps} />;
        case 'saved':
            return <SavedEncounters {...otherProps} />;
        default:
            return <h2>encounter manager</h2>
    }

}

const mapReduxStateToProps = ({ encounterMode }) => ({ mode: encounterMode.mode })
export default connect(mapReduxStateToProps)(ViewSwitcher)