import React from "react";
import { Link } from "react-router-dom";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import withStyles from "material-ui/styles/withStyles";

const styles = ({ palette }) => ({
  nav: {
    background: palette.primary[500],
    display: "flex",
    height: "30px",
  },
  link: {
    margin: "5px",
  },
});

const Header: React.StatelessComponent = ({ classes }) =>
  (
    <nav className={classes.nav}>
      <Link className={classes.link} to="/">Home</Link>
      <Link className={classes.link} to="/create">Create</Link>
      <Link className={classes.link} to="/topics">Topics</Link>
      <ThemeSwitch />
    </nav>
  );

export default withStyles(styles)(Header);
