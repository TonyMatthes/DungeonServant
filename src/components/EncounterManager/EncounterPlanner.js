import React, {Component} from 'react';
import { connect } from 'react-redux';


class EncounterPlanner extends Component{
    state={
        // players:[],
        // nPCs:[],
    }
    render(){
        return(
            <h2>this is the encounter planner component</h2>
        )
    }
}

export default EncounterPlanner

//this component will be a tool for the DM to set up encounters. It will get players currently playing,
//and have a monster/npc selector for the DM to pick enemies.