import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import MemoryIcon from '@material-ui/icons/Memory';
import palette from '../../theme/palette'

const useStyles = makeStyles(theme => ({
  appBar: {
    background: palette.black,
  },
  loginButton: {
    marginRight: theme.spacing(2),
    color: palette.green
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: palette.neon_green
  },
  icon: {
    color: palette.neon_green
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Appbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <SvgIcon className={classes.icon} component={MemoryIcon} fontSize='large'/>
        <Typography variant="h4" className={classes.title}>
          MaChip
        </Typography>
        <Button className={classes.loginButton}>Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar