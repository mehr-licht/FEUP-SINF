import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Col, Row, Container } from "reactstrap";
import Layout from '../components/common/Layout'
import MachipTable from '../components/MachipTable'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        textAlign: "center",
        paddingTop: '1vh',
        color: theme.palette.white,
        backgroundColor: theme.palette.gray,
        height: '40vh',
    },
    column: {
        paddingBottom: '2vh',
        paddingLeft: '1vh',
        paddingRight: '1vh',
    },
    title: {
        color: theme.palette.neon_green,
        fontWeight: "bold",
    },
    tableCard: {
        padding: 5,
        backgroundColor: theme.palette.gray,
        color: theme.palette.neon_green,
        textAlign: "center",
        maxHeight: '100%',
        overflow: 'auto'
    },
}));

const Dashboard = () => {
    const classes = useStyles();

    function FormCol(props) {
        return (
            <Col className={classes.column} xs="6">
                <Card className={classes.card}>
                    {props.table}
                </Card>
            </Col>
        );
    }

    return (
        <Layout>
            <Container fluid>
                <Row>
                    <FormCol table={
                        <Card className={classes.tableCard} raised>
                            <MachipTable endpoint="sales_orders" />
                        </Card>
                    }/>
                    <FormCol title = "ORDERS"/>
                    <FormCol title = "INWARD"/>
                    <FormCol title = "OUTWARD"/>
                </Row>
            </Container>
        </Layout>
    );
}

export default Dashboard;