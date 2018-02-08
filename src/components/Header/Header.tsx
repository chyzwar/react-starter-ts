import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header: React.StatelessComponent = () =>
  (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/topics">Topics</Link>
      <ThemeSwitch />
    </nav>
  );

export default Header;
