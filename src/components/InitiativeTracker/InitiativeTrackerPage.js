import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import dummydata from './dummydata'
import CharacterCard from './CharacterCard';
import rollInitiative from './rollInitiative'


const drawerWidth = 150;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: theme.zIndex.appBar - 100,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});
class InitiativeTrackerPage extends Component {

  state = {
    battleOrder: null
  };

  setBattleOrder = (characters) => () => {
    this.setState({ battleOrder: rollInitiative(characters) })
  }
  takeTurn = () =>() => {
    this.setState({battleOrder: this.state.battleOrder.concat(this.state.battleOrder.splice(0, 1))})
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {['The', 'only', 'thing', 'these', 'buttons'].map((text, index) => (
              <ListItem button onClick={this.setBattleOrder(dummydata)} key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['do', 'now', 'is', 'roll', 'initiative'].map((text, index) => (
              <ListItem button onClick={this.setBattleOrder(dummydata)} key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
        <pre>{JSON.stringify(this.state.battleOrder, null, 2)}</pre>
          <Grid container direction="row" alignItems="center" spacing={40}>
            {(this.state.battleOrder || dummydata).map((character, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                <CharacterCard key={index} 
                isFirst={index === 0?true:false} 
                character={character.character || character}
                currentInitiative= {character.currentInitiative}
                takeTurn={!this.state.battleOrder?()=>alert('set a battle order first'):this.takeTurn()} />
              </Grid>
            ))}
          </Grid>

        </main>
      </div>
    );
  }
}

export default withStyles(styles)(InitiativeTrackerPage);