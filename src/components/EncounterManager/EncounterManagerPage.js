import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  Drawer,
  List,
  Typography,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import rollInitiative from './rollInitiative';
import ViewSwitcher from './ViewSwitcher';

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
    padding: theme.spacing.unit * 2,
  },
  toolbar: theme.mixins.toolbar,
});

class EncounterManagementPage extends Component {

  state = {
    battleOrder: null,
    encounterCharacters:[],

  };

  componentDidMount(){
    this.props.dispatch({type:'FETCH_NON_PLAYER_CHARACTERS'})
    this.props.dispatch({type:'FETCH_PLAYER_CHARACTERS',payload:1})
    //the payload will contain the campaign number that the DM logged in has
  }

  setBattleOrder = (characters) => () => {
    this.setState({ battleOrder: rollInitiative(characters) })
  }
  takeTurn = () => () => {
    this.setState({ battleOrder: this.state.battleOrder.concat(this.state.battleOrder.splice(0, 1)) })
  }
  confirmParticipants=(characters)=>()=>{
    this.setState({encounterCharacters: characters })
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
            {['planner', 'tracker', 'player', 'saved'].map((text, index) => (
              <ListItem button onClick={()=>this.props.dispatch({type:'SET_ENCOUNTER_MODE',payload:text})} key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          {/* <pre>{JSON.stringify(this.state.battleOrder, null, 2)}</pre> */}
          <ViewSwitcher
            setBattleOrder={this.setBattleOrder(this.state.encounterCharacters)}
            takeTurn={this.takeTurn}
            battleOrder={this.state.battleOrder} 
            encounterCharacters={this.state.encounterCharacters}
            addEncounterCharacter = {this.addEncounterCharacter}
            confirmParticipants = {this.confirmParticipants}/>

        </main>
      </div>
    );
  }
}
const mapReduxStateToProps = ({ encounterMode, characters }) => ({ encounterMode, characters })

export default withStyles(styles)(connect(mapReduxStateToProps)(EncounterManagementPage));