import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Col, Row, Container } from "reactstrap";
import Layout from '../components/common/Layout'

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
    }
}));

const Dashboard = () => {
    const classes = useStyles();

    function FormCol(props) {
        return (
            <Col className={classes.column} xs="6">
                <Card className={classes.card}>
                    <h2 className={classes.title}>{props.title}</h2>
                </Card>
            </Col>
        );
    }

    return (
        <Layout>
            <Container fluid>
                <Row>
                    <FormCol title = "SALES"/>
                    <FormCol title = "ORDERS"/>
                    <FormCol title = "INWARD"/>
                    <FormCol title = "OUTWARD"/>
                </Row>
            </Container>
        </Layout>
    );
}

export default Dashboard;