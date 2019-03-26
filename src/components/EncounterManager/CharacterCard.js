import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  withStyles
} from '@material-ui/core/';
import { connect } from 'react-redux';

const styles = {
  // card: {
  //   minWidth: 275,
  // },
  playerCard: {
    // minWidth: 275,
    backgroundColor: 'gold',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class CharacterCard extends Component {


  render() {
    const { classes, character } = this.props;
    return (
      <Card >
        <CardHeader className={character.player && (classes.playerCard)} title={character.individualName || character.name} subheader={character.player || character.name} />
        <Divider />
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {character.currentInitiative !== 100 ?
              'Initiative: ' + character.currentInitiative + ` Modifier: ${character.abilityScores.dexterity.modifier <= 0 ?
                character.abilityScores.dexterity.modifier :
                '+' + character.abilityScores.dexterity.modifier}` :
              `Dexterity:${character.abilityScores.dexterity.value},  Modifier: ${character.abilityScores.dexterity.modifier <= 0 ?
                character.abilityScores.dexterity.modifier :
                '+' + character.abilityScores.dexterity.modifier}`}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            HP: {character.current_hit_points} / {character.hit_points}
          </Typography>
          <Typography component="p">
            {character.name}'s character info or something
          </Typography>
        </CardContent>
        <CardActions>
          {this.props.isFirst && (
            <>
              <Button size="small" onClick={() => this.props.dispatch({ type: 'TAKE_TURN' })}>Act</Button>
              <Button size="small">hold action</Button>
            </>
          )}
        <Button size="small" onClick={() => this.props.dispatch({ type: 'IS_DEAD', payload: character })}>kill</Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(connect()(CharacterCard));