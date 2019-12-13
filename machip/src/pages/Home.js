import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { navigate } from '@reach/router'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SvgIcon from '@material-ui/core/SvgIcon';
import MemoryIcon from '@material-ui/icons/Memory';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: theme.palette.black,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2em',
    backgroundColor: theme.palette.gray
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.green
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.green
  },
  typography: {
    color: theme.palette.neon_green,
  },
  textField: {
    position: 'relative',

    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.neon_green,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.neon_green,
      }
    }
  },
  input: {
    backgroundColor: theme.palette.light_gray,
    color: theme.palette.black,
  },
  labelRoot: {
    color: "black",
    "&$labelFocused": {
      margin:0,
      fontWeight: 'bold',
      color: theme.palette.neon_green,
      position: 'absolute',
      top:'-0.5em',

    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card className={classes.card}>
          <Avatar className={classes.avatar}>
            <SvgIcon component={MemoryIcon} />
          </Avatar>
          <Typography className={classes.typography} component="h1" variant="h5">
            Sign in
                </Typography>
          <TextField className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              classes: {
                root: classes.labelRoot,
                focused: classes.labelFocused
              }
            }}
          />
          <TextField className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              classes: {
                root: classes.labelRoot,
                focused: classes.labelFocused
              }
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => { navigate('/dashboard') }}
          >
            Login
          </Button>
        </Card>
      </Container>
    </div>
  );
}

export default Home;