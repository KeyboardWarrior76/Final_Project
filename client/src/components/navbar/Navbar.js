import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to='/' activeStyle={{ color: 'inherit' }}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <HomeIcon />
            </IconButton>
          </NavLink>
          <Typography variant="h6" className={classes.title}>
            App Estimator
          </Typography>
          <Button color="inherit">Login/Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
