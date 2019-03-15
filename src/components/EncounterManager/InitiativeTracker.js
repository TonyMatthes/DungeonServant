import React, { Component } from 'react';
import {
  Grid,
} from '@material-ui/core';

import CharacterCard from './CharacterCard';
import { connect } from 'react-redux';

//this will look a lot better later

class InitiativeTracker extends Component {
  render() {
    return (
      <>
        <button onClick={()=>this.props.dispatch({type:'SET_BATTLE_ORDER'})}>set order</button>
        <Grid container direction="row" alignItems="center" spacing={40}>
          {(this.props.manager.battleOrder || this.props.manager.encounterCharacters).map((character, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
              <CharacterCard key={index}
                // determines whether or not the character can act
                isFirst={!this.props.manager.battleOrder ? false : index === 0 ? true : false}
                //character.character if initiative has been rolled, character if not
                character={character.character || character}
                currentInitiative={character.currentInitiative}
                //the action to take a turn
                takeTurn={this.props.takeTurn()} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

const mapStateToProps = ({encounterMode:{manager}}) =>({manager})

export default connect (mapStateToProps)(InitiativeTracker);