import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Layout from '../components/common/Layout'
import MachipTable from '../components/MachipTable'
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
    tableCard: {
        padding: 25,
        backgroundColor: theme.palette.gray,
        color: theme.palette.neon_green,
        textAlign: "center",
        height: '80vh'
    },
}));

const OutwardWarehouse = () => {
    const classes = useStyles();

    return (
        <Layout>
            <Card className={classes.tableCard} raised>
                <MachipTable endpoint="outward" hideButton/>
            </Card>
        </Layout>
    );
}

export default OutwardWarehouse;