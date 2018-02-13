import React from "react";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import { WithStyles } from "material-ui/styles";
import ListItem from "material-ui/List/ListItem";
import ListItemIcon from "material-ui/List/ListItemIcon";
import ListItemText from "material-ui/List/ListItemText";
import EdiIcon from "material-ui-icons/Edit";
import AddIcon from "material-ui-icons/Add";
import ListIcon  from "material-ui-icons/List";


const decorate = withStyles(
  () => ({
    closeDrawerIcon: {
      justifyContent: "flex-end";
    },
  }),
);

interface AppDrawerState {
  open: boolean;
}

interface AppDrawerProps {
  children: React.ReactNode;
}

const DecoratedClass = decorate<AppDrawerProps>(
  class AppDrawer extends React.Component<AppDrawerProps & WithStyles<"closeDrawerIcon">, AppDrawerState> {
    public state = {
      open: false,
    };

    private handleDrawerOpen = () => {
      this.setState({
        open: true,
      });
    }

    private handleDrawerClose = () => {
      this.setState({
        open: false,
      });
    }

    public render() {
      const { open } = this.state;
      const { children } = this.props;

      return (
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={this.handleDrawerOpen} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Drawer variant="persistent" anchor="left" open={open}>
            <ListItem button style={{flowDirection: "reverse-row"}}>
              <ListItemIcon >
                <ChevronLeftIcon onClick={this.handleDrawerClose} />
              </ListItemIcon>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="View Todos" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <EdiIcon />
              </ListItemIcon>
              <ListItemText primary="Edit Todos" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Todo" />
            </ListItem>
          </Drawer>
          {children}
        </React.Fragment>
      );
    }
  },
);

export default DecoratedClass;
