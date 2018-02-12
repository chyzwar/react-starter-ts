import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import withStyles from "material-ui/styles/withStyles";

// import { Link } from "react-router-dom";
// import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const decorate = withStyles({
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const Header = decorate(({ classes }) =>
  (
  <AppBar position="static">
    <Toolbar>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" className={classes.flex}>
        Title
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  ),
);

export default Header;

// <nav>
// <Link to="/">Home</Link>
// <Link to="/create">Create</Link>
// <Link to="/topics">Topics</Link>
// <ThemeSwitch />
// </nav>