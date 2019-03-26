import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withStyles,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
    encounterCharacters: [],

  };

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_NON_PLAYER_CHARACTERS' })
    this.props.dispatch({ type: 'FETCH_PLAYER_CHARACTERS', payload: 1 })
    //the payload will contain the campaign number that the DM logged in has
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
              <ListItem button onClick={() => this.props.dispatch({ type: 'SET_ENCOUNTER_MODE', payload: text })} key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>))}
            {this.props.encounterMode.manager.battleOrder?
            <ListItem button onClick={() => this.props.dispatch({ type: 'CLEAR_BATTLE_ORDER' })}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary='Clear Battle Order' />
            </ListItem>: this.props.encounterMode.manager.encounterCharacters.length >= 2?
          <ListItem button onClick={() => this.props.dispatch({ type: 'SET_BATTLE_ORDER' })}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary='Set Battle Order' />
        </ListItem>:<></>}
          </List>
        </Drawer>
        <main className={classes.content}>
          {/* <pre>{JSON.stringify(this.state.battleOrder, null, 2)}</pre> */}
          <ViewSwitcher />

        </main>
      </div>
    );
  }
}
const mapReduxStateToProps = ({ encounterMode, characters }) => ({ encounterMode, characters })

export default withStyles(styles)(connect(mapReduxStateToProps)(EncounterManagementPage));