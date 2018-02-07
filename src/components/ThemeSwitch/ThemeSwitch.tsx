import React from "react";

import { connect } from "react-redux";
import { changeTheme } from "../../actions/ThemeActions";

type ThemeSwitchProps = {
  changeTheme: Function
};

const ThemeSwitch: React.StatelessComponent = (props: ThemeSwitchProps) => (
  <div>
    <button onClick={props.changeTheme("blue")}> Blue </button>
    <button onClick={props.changeTheme("teal")}> Teal </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  changeTheme: (themeName: string) => {
    dispatch(changeTheme(themeName));
  },
});

export default connect(null, mapDispatchToProps)(ThemeSwitch);
