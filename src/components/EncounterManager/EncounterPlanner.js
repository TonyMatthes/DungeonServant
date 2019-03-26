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
import Player from '../../gameFunctions/CharacterClasses/Player'
import NPC from '../../gameFunctions/CharacterClasses/NPC'
import rollDice from '../../gameFunctions/rollDice'

//
class EncounterPlanner extends Component {
  state = {
    characterList: [],
    characterToAdd: {
      individualName: '',
      hit_points: 0,
    },
    editorOpen: false,
  }

  addToEncounter = (character) => () => {
    const nPCRenamer = (char, renamingNumber = 2) => {
      console.log(this.state.characterList.map(item => item.individualName))
      if (!this.state.characterList.length) {
        return char
      } else if ((this.state.characterList.map(item => item.individualName)).includes(char.individualName)) {
        let newNamedCharacter = ({ ...char, individualName: char.name + ' ' + renamingNumber });
        renamingNumber++;
        return nPCRenamer(newNamedCharacter, renamingNumber)
      }
      return char
    }

    let characterToAdd = character.player ? character : new NPC(nPCRenamer(this.state.characterToAdd))
    this.setState({
      ...this.state,
      characterList: [...this.state.characterList, characterToAdd],
      editorOpen: false,
    })
  }

  handleClickOpen = (character) => () => {
    this.setState({ editorOpen: true, characterToAdd: { ...character, individualName: character.name } });
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
    let roll = NPC.rollHP(this.state.characterToAdd.hit_dice, this.state.characterToAdd.abilityScores.constitution.modifier)
    this.setState({
      characterToAdd:
      {
        ...this.state.characterToAdd,
        hit_points: roll,
        current_hit_points: roll
      }
    })
  }

  render() {
    return (
      <>
        <h4>current participants:</h4>
        <ul>
          {this.state.characterList.map((character, index) => <li key={index}>{character.name}</li>)}
        </ul>
        <button onClick={() => this.props.dispatch({ type: 'SET_BATTLE_PARTICIPANTS', payload: this.state.characterList })}>confirm participants</button>
        <ul>
          {this.props.characters.player.map(pc =>
            <li key={pc.id}>
              {pc.name}
              <button onClick={this.addToEncounter(pc)}>add to encounter</button>
            </li>)}
        </ul>
        <ul>
          {this.props.characters.nonPlayer.map(character =>
            <li key={character.name}>
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
                value={this.state.characterToAdd.individualName}
                onChange={this.handleChangeFor('individualName', 'characterToAdd')} />
              <TextField
                label="hit points"
                type="text"
                value={this.state.characterToAdd.hit_points}
                onChange={this.handleChangeFor('hit_points', 'characterToAdd')} />
              <Button onClick={this.rollHP(this.state.characterToAdd)}>or roll HP</Button>
            </FormGroup>}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.addToEncounter(this.state.characterToAdd)}>Submit</Button>
            <Button onClick={() => this.props.dispatch({ type: 'ADD_PARTICIPANT', payload: this.state.characterToAdd })}>Submit</Button>
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