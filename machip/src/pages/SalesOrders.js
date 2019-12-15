import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import Layout from '../components/common/Layout'
import MachipTable from '../components/MachipTable'

const useStyles = makeStyles(theme => ({
    tableCard: {
        padding: 25,
        backgroundColor: theme.palette.gray,
        color: theme.palette.neon_green,
        textAlign: "center",
        height: '80vh'
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Card className={classes.tableCard} raised>
                <MachipTable endpoint="sales_orders" />
            </Card>
        </Layout>
    );
}

export default Dashboard;