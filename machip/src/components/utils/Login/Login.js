import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    color: 'white',
    backgroundColor: '#1f2833',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Login = () => {
    const classes = useStyles();
    return (  
      <div className={classes.paper}>
          <h2 id="transition-modal-title">Login</h2>
          <p id="transition-modal-description">react-transition-group animates me.</p>
      </div>
    );
};
export default Login;
