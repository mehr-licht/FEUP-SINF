import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Layout from '../components/common/Layout'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      paddingLeft: '20px',
      paddingTop: '10px',
    },
    card: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.white,
      backgroundColor: theme.palette.gray,
      height: '40vh',
    }
  }));

const Dashboard = () => {
    const classes = useStyles();

    function FormRow() {
        return (
        <React.Fragment>
            <Grid item xs>
                <Card className={classes.card}>
                    <h2>Sales</h2>
                </Card>
            </Grid>
            <Grid item xs>
                <Card className={classes.card}>
                    <h2>Orders</h2>
                </Card>
            </Grid>
        </React.Fragment>
        );
    }

    return (
        <Layout >
            <div className={classes.root}>
                <Grid container spacing={6}>
                    <Grid container item xs={12} spacing={4} >
                        <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={4}>
                        <FormRow />
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
}

export default Dashboard;