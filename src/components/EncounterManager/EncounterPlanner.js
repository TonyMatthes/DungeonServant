import React, {Component} from 'react';
import { connect } from 'react-redux';


class EncounterPlanner extends Component{
    state={
        // players:[],
        // nPCs:[],
    }
    render(){
        return(
            <>
            <ul>
                {this.props.characters.player.map(pc => <li>{pc.name} <button onClick={this.props.addEncounterCharacter({...pc, isPlayer:true })}>add to encounter</button></li>)}
            </ul>
            <ul>
                {this.props.characters.nonPlayer.map(character => <li>{character.name} <button onClick={this.props.addEncounterCharacter({...character, isPlayer:false })}>add to encounter</button></li>)}
            </ul>
            </>
        )
    }
}

const mapStateToProps = ({characters}) => ({characters})

export default connect (mapStateToProps) (EncounterPlanner)

//this component will be a tool for the DM to set up encounters. It will get players currently playing,
//and have a monster/npc selector for the DM to pick enemies.