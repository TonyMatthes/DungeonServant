import React, { Component } from 'react';
import {
  Grid,
} from '@material-ui/core';

import CharacterCard from './CharacterCard';
import { connect } from 'react-redux';


class InitiativeTracker extends Component {
  render() {
    return (
       this.props.manager.battleOrder?
      <>
        <Grid container direction="row" alignItems="center" justify="center" spacing={40}>
          <Grid item direction="row" alignItems="center" spacing={40}>
            <CharacterCard
              // determines whether or not the character can act
              isFirst={true}
              //character.character if initiative has been rolled, character if not
              character={this.props.manager.battleOrder[0]} />
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={40}>
          {(this.props.manager.battleOrder.slice(1) || this.props.manager.encounterCharacters).map((character, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
              <CharacterCard key={index}
                // determines whether or not the character can act
                isFirst={!this.props.manager.battleOrder ? false : index === 0 ? true : false}
                //character.character if initiative has been rolled, character if not
                character={character.character || character}/>
            </Grid>
          ))}
        </Grid>
      </>:
        <p>pick characters for a battle in the encounter planner to start a battle</p>
    );
  }
}

const mapStateToProps = ({ encounterMode: { manager } }) => ({ manager })

export default connect(mapStateToProps)(InitiativeTracker);