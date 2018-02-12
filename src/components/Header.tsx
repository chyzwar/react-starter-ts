import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import { WithStyles } from "material-ui/styles";
import BottomNavigation from "material-ui/BottomNavigation";
import BottomNavigationAction from "material-ui/BottomNavigation/BottomNavigationAction";
import Icon from "material-ui/Icon";
import RestoreIcon from "material-ui-icons/Restore";
import FavoriteIcon from "material-ui-icons/Favorite";
import LocationOnIcon from "material-ui-icons/LocationOn";
import withStyles from "material-ui/styles/withStyles";

interface HeaderState{
  value: any;
}

const decorate = withStyles({
  root: {
    width: 500,
  },
});

const DecoratedClass = decorate<{}>(
  class Header extends React.Component<WithStyles<"root">, HeaderState>{
    constructor(props: WithStyles<"root">) {
      super(props);

      this.state = {
        value: "recents",
      };
    }

    handleChange = (event: any, value: any) => {
      this.setState({ value });
    }

    render() {
      const { classes } = this.props;
      const { value } = this.state;

      return(
        <AppBar position="static">
          <Toolbar>
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
              <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
              <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
              <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
            </BottomNavigation>
          </Toolbar>
        </AppBar>
      );
    }
  },
);

export default DecoratedClass;

// <nav>
// <Link to="/">Home</Link>
// <Link to="/create">Create</Link>
// <Link to="/topics">Topics</Link>
// <ThemeSwitch />
// </nav>
