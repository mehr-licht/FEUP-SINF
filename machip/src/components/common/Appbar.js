import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import MemoryIcon from '@material-ui/icons/Memory';

const useStyles = makeStyles(theme => ({
  appBar: {
    background: theme.palette.gray,
    zIndex: theme.zIndex.drawer + 1
  },
  loginButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.neon_green,
    borderColor: theme.palette.neon_green,
    fontWeight: 'bold'
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: theme.palette.neon_green
  },
  icon: {
    color: theme.palette.neon_green
  },
  toolbar: theme.mixins.toolbar,
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Appbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <SvgIcon className={classes.icon} component={MemoryIcon} fontSize='large'/>
        <Typography variant="h4" className={classes.title}>
          MaChip
        </Typography>
        <Button variant="outlined" className={classes.loginButton}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar