import React, { Component } from 'react';
import {
  Grid,
} from '@material-ui/core';

import dummydata from './dummydata'
import CharacterCard from './CharacterCard';

//this will look a lot better later

class InitiativeTracker extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.setBattleOrder}>set order</button>
        <Grid container direction="row" alignItems="center" spacing={40}>
          {(this.props.battleOrder || dummydata).map((character, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
              <CharacterCard key={index}
                // determines whether or not the character can act
                isFirst={!this.props.battleOrder ? false : index === 0 ? true : false}
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

export default InitiativeTracker;