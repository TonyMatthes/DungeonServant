import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  withStyles
} from '@material-ui/core/';

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
    const { classes } = this.props;
    return (
      <Card className={this.props.character.isPlayer ? classes.playerCard : classes.card}>
        {this.props.character.isPlayer &&(<CardHeader title="PC"></CardHeader>)}
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {this.props.currentInitiative ?
              'Current Initiative: ' + this.props.currentInitiative + ` Modifier: ${this.props.character.initiativeModifier <= 0 ?
                this.props.character.initiativeModifier :
                '+' + this.props.character.initiativeModifier}` :
              `Initiative:${this.props.character.initiative}, Modifier: ${this.props.character.initiativeModifier <= 0 ?
                this.props.character.initiativeModifier :
                '+' + this.props.character.initiativeModifier}`}
          </Typography>
          <Typography variant="h5" component="h2">
            {this.props.character.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            HP: {this.props.character.hP} / {this.props.character.maxHP}
          </Typography>
          <Typography component="p">
            {this.props.character.name}'s character info or something
          </Typography>
        </CardContent>
        {this.props.isFirst && (<CardActions>
          <Button size="small" onClick={this.props.takeTurn}>Act</Button>
          <Button size="small">hold action</Button>
        </CardActions>)}
      </Card>
    );
  }
}

export default withStyles(styles)(CharacterCard);