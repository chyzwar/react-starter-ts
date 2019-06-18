import React from "react";
import Drawer from "@material-ui/core/Drawer/Drawer";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EdiIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import ListIcon from "@material-ui/icons/List";
import Paper from "@material-ui/core/Paper/Paper";
import ThemeSwitch from "../connected/ThemeSwitch";
import withStyles from "@material-ui/core/styles/withStyles";

import { WithStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const decorate = withStyles({
  closeDrawerIcon: {
    justifyContent: "flex-end",
  },
  paperContent: {
    flexGrow: 1,
  },
  toolbarRoot: {
    display: "flex",
    justifyContent: "space-between",
  },
});

interface AppDrawerState {
  open: boolean;
}

interface AppDrawerProps {
  children: React.ReactNode;
}

type PropsWithStyle = AppDrawerProps & WithStyles<"closeDrawerIcon" | "paperContent" | "toolbarRoot">;

const DecoratedClass = decorate<AppDrawerProps>(
  class AppDrawer extends React.Component<PropsWithStyle, AppDrawerState> {
    public state = {
      open: false,
    };

    private readonly openDrawer = () => {
      this.setState({
        open: true,
      });
    }

    private readonly closeDrawer = () => {
      this.setState({
        open: false,
      });
    }

    public render() {
      const { open } = this.state;
      const {
        children,
        classes: {
          closeDrawerIcon,
          paperContent,
          toolbarRoot,
        },
      } = this.props;

      return (
        <React.Fragment>
          <AppBar position="static">
            <Toolbar classes={{root: toolbarRoot}}>
              <IconButton onClick={this.openDrawer} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <ThemeSwitch />
            </Toolbar>
          </AppBar>

          <Drawer variant="persistent" anchor="left" open={open}>
            <ListItem button classes={{root: closeDrawerIcon}} onClick={this.closeDrawer}>
              <ListItemIcon >
                <ChevronLeftIcon />
              </ListItemIcon>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <Link to="/view">
                <ListItemText primary="View Todos" />
              </Link>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <EdiIcon />
              </ListItemIcon>
              <Link to="/manage">
                <ListItemText primary="Edit Todos" />
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <Link to="/create">
                <ListItemText primary="Add Todo" />
              </Link>
            </ListItem>
          </Drawer>

          <Paper classes={{root: paperContent}}>
            {children}
          </Paper>
        </React.Fragment>
      );
    }
  },
);

export default DecoratedClass;
