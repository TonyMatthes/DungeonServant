import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Grid,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import navLinks from './navLinks'

const styles = theme => ({
  appBar: {
    position: 'sticky',
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  inline: {
    display: 'inline'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  title: {
    display: 'inline-block',
    marginLeft: 10
  },
  iconContainer: {
    display: 'block'
  },
  iconButton: {
    float: 'right'
  },
})
class Nav extends Component {

  state = {
    menuDrawer: false,
  };

  mobileMenuOpen = (event) => {
    this.setState({ menuDrawer: true });
  }

  mobileMenuClose = (event) => {
    this.setState({ menuDrawer: false });
  }



  render() {
    const { classes } = this.props;
    return (

      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={24} alignItems="baseline" >
            <Grid className={classes.flex} item xs={12} alignItems='baseline' >
            <div className={classes.iconContainer}>
                <IconButton className={classes.iconButton} onClick={this.mobileMenuOpen} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
              </div>
              <div className={classes.inline}>
                <Typography variant="h6" color="inherit" noWrap>
                  <Link to='/' className={classes.link}>
                    <span className={classes.title}>Dungeon Servant</span>
                  </Link>
                </Typography>
              </div>
              <div>
                <SwipeableDrawer anchor="left" open={this.state.menuDrawer} onClose={this.mobileMenuClose} >
                  <AppBar title="Menu" />
                  <List>
                    {navLinks.map((item, index) => (
                      <ListItem component={Link} to={{ pathname: item.pathname }} button key={item.index} onClick={this.mobileMenuClose}>
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                </SwipeableDrawer>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar >
    )
  }

}

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({user});
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Nav));
