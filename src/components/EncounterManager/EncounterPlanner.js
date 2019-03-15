import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormGroup,
  TextField,
  Button,
} from '@material-ui/core'

import rollDice from '../../gameFunctions/rollDice'

//
class EncounterPlanner extends Component {
  state = {
    characterList:[],
    characterToAdd:{},
    editorOpen:false,
  }

  addToEncounter = (character) => () => {
    this.setState({
      characterList: [...this.state.characterList, character],
      characterToAdd:{},
      editorOpen:false,
    })
  }

  handleClickOpen = (character) => () => {
    this.setState({ editorOpen: true, characterToAdd: character });
  };

  handleClose = () => {
    this.setState({
      ...this.state,
      editorOpen: false
    });
  };

  handleChangeFor = (input, key) => event => {
    this.setState({
      ...this.state,
      [key]: {
        ...this.state[key],
        [input]: event.target.value,
      }
    })
  }

  rollHP = (character) => () => {
    this.setState({ characterToAdd: 
      { ...this.state.characterToAdd, hit_points: rollDice(character.hit_dice).reduce((accumulator,currentvalue)=>accumulator+currentvalue) } })
  }

  render() {
    return (
      <>
        <h4>current participants:</h4>
        <ul>
          {this.state.characterList.map((character, index) => <li key={index}>{character.name}</li>)}
        </ul>
        <button onClick={this.props.confirmParticipants(this.state.characterList)}>confirm participants</button>
        <ul>
          {this.props.characters.player.map(pc =>
            <li>
              {pc.name}
              <button onClick={this.addToEncounter({ ...pc, isPlayer: true })}>add to encounter</button>
            </li>)}
        </ul>
        <ul>
          {this.props.characters.nonPlayer.map(character =>
            <li>
              {character.name}
              <button onClick={this.handleClickOpen(character)}>add to encounter</button>
            </li>)}
        </ul>

        <Dialog
          open={this.state.editorOpen}
          onClose={this.handleClose}
        >
          <DialogContent>
            <DialogContentText>
              edit {this.state.characterToAdd.name} before adding?
         </DialogContentText>
            {<FormGroup>
              <TextField
                label="Name"
                type="text"
                value={this.state.characterToAdd.name}
                onChange={this.handleChangeFor('name', 'characterToAdd')} />
              <TextField
                label="hit points"
                type="number"
                value={this.state.characterToAdd.hit_points}
                onChange={this.handleChangeFor('description', 'characterToAdd')} />
              <Button onClick={this.rollHP(this.state.characterToAdd)}>or roll HP</Button>
            </FormGroup>}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.addToEncounter({...this.state.characterToAdd, current_hit_points: this.state.characterToAdd.hit_points})}>Submit</Button>
          </DialogActions>

        </Dialog>
      </>
    )
  }
}

const mapStateToProps = ({ characters }) => ({ characters })

export default connect(mapStateToProps)(EncounterPlanner)

//this component will be a tool for the DM to set up encounters. It will get players currently playing,
//and have a monster/npc selector for the DM to pick enemies.