import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/common/Layout'

const useStyles = makeStyles(theme => ({
    contentBackground: {
        
    }
}));

const Dashboard = () => {
    const classes = useStyles();
    return (
        <Layout >
            <div className={classes.backgroundColor}>Olá</div>
        </Layout>
    );
}

export default Dashboard;