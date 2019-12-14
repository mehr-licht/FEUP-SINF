import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        minHeight: '100vh'
    },
    contentBox: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: theme.palette.black,
    },
    toolbar: theme.mixins.toolbar
}));

const Layout = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Appbar />
            <Sidebar />
            <main className={classes.contentBox}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}

export default Layout