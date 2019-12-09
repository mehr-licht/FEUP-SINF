import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Grow from '@material-ui/core/Grow';
import SvgIcon from '@material-ui/core/SvgIcon';
import MemoryIcon from '@material-ui/icons/Memory';

import Login from "./Login/Login";

const useStyles = makeStyles(theme => ({
  appBar: {
    background: '#1f2833',
  },
  loginButton: {
    marginRight: theme.spacing(2),
    color: '#FFF'
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Appbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <SvgIcon component={MemoryIcon} fontSize='large'/>
        <Typography variant="h4" className={classes.title}>
          MaChip
        </Typography>
        <Button className={classes.loginButton} onClick={handleOpen}>Login</Button>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Grow 
            in={open}
            style={{ transformOrigin: '0 0 0' }}
            {...(open ? { timeout: 1000 } : {})}>
            <Login />
          </Grow>
      </Modal>
        
      </Toolbar>
    </AppBar>
  );
}

export default Appbar