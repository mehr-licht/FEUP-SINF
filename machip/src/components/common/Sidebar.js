import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Overview from '@material-ui/icons/Assignment';
import Sales from '@material-ui/icons/Dashboard';
import Orders from '@material-ui/icons/LocalShipping';
import Picking from '@material-ui/icons/People';
import { navigate } from '@reach/router';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#1f2833',
        color: '#c5c6c7',
        fontWeight: 'bold',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const Sidebar = () => {

    const classes = useStyles();

    function NavigateItem(props) {
        return (
            <ListItem button key={props.text} onClick={() => { navigate('/' + props.site) }}>
                <ListItemIcon>
                    {(() => {
                        switch (props.text) {
                            case "Overview": return <Overview htmlColor="white" />;
                            case "Sales": return <Sales htmlColor="white" />;
                            case "Orders": return <Orders htmlColor="white" />;
                            case "Picking": return <Picking htmlColor="white" />;
                        }
                    })()}
                </ListItemIcon>
                <ListItemText primary={props.text} />
            </ListItem>
        );
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <List>
                <NavigateItem text='Overview' site="dashboard" />
                <NavigateItem text='Sales' site="sales_orders" />
                <NavigateItem text='Orders' site="purchase_orders" />
                <NavigateItem text='Picking' site="picking_orders" />
            </List>
            <Divider />
        </Drawer>
    );
}

export default Sidebar