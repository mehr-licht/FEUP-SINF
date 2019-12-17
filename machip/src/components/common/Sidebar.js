import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import PeopleIcon from "@material-ui/icons/People";
import { navigate } from "@reach/router";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#1f2833",
    color: "#c5c6c7",
    fontWeight: "bold"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List>
        {["Overview", "Sales", "Orders", "Picking"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              if (text === "Sales") {
                navigate("/sales_orders");
              } else if (text === "Overview") {
                navigate("/dashboard");
              } else if (text === "Orders") {
                navigate("/purchase_orders");
              } else if (text === "Picking") {
                navigate("/outward");
              }
            }}
          >
            <ListItemIcon>
              {index % 2 === 0 ? (
                index - 2 === 0 ? (
                  <AssignmentIcon htmlColor="white" />
                ) : (
                  <DashboardIcon htmlColor="white" />
                )
              ) : index - 3 === 0 ? (
                <LocalShippingIcon htmlColor="white" />
              ) : (
                <PeopleIcon htmlColor="white" />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
