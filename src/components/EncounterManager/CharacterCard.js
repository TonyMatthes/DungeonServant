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
        <CardHeader title={this.props.character.name} subheader={this.props.character.player || this.props.character.type}/>
        <Divider/>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {this.props.currentInitiative ?
              'Initiative: ' + this.props.currentInitiative + ` Modifier: ${(Math.floor((this.props.character.dexterity-10)/2))<= 0 ?
                Math.floor((this.props.character.dexterity-10)/2) :
                '+' + Math.floor((this.props.character.dexterity-10)/2)}` :
              `Dexterity:${this.props.character.dexterity}, Initiative Modifier: ${(Math.floor((this.props.character.dexterity-10)/2)) <= 0 ?
                (Math.floor((this.props.character.dexterity-10)/2)) :
                '+' + (Math.floor((this.props.character.dexterity-10)/2))}`}
          </Typography>
          <Typography variant="h5" component="h5">
            
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            HP: {this.props.character.current_hit_points} / {this.props.character.hit_points}
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