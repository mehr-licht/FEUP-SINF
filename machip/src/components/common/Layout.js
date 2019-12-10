import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

const useStyles = makeStyles(theme => ({
    contentBox: {
        backgroundColor: theme.palette.black
    }
}));

const Layout = ({children}) => {
    const classes = useStyles();
    return (
        <>
            <Sidebar />
            <Appbar />
            <Box mx={30} height='calc(100vh - 64px)' width='calc(100% - 240px)' className={classes.contentBox}>
                {children}
            </Box>
        </>
    );
}

export default Layout