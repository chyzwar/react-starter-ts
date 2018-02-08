import React from "react";

import { connect } from "react-redux";
import { changeTheme } from "../../actions/ThemeActions";

interface ThemeSwitchProps{
  changeTheme(name: string): void;
}

const ThemeSwitch: React.SFC<ThemeSwitchProps> = (props) => (
  <div>
    <button onClick={props.changeTheme("blue")}> Blue </button>
    <button onClick={props.changeTheme("teal")}> Teal </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  changeTheme: (name: string) => {
    dispatch(changeTheme(name));
  },
});

export default connect(undefined, mapDispatchToProps)(ThemeSwitch);
