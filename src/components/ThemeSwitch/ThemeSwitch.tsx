import React from "react";
import { Dispatch } from "redux";

import { connect } from "react-redux";
import { changeTheme } from "../../actions/ThemeActions";
import { State } from "../../types/State";
import { Action } from "../../types/Action";

interface ThemeSwitchProps {
  changeThemeBlue(): void;
  changeThemeTeal(): void;
}

const ThemeSwitch: React.SFC<ThemeSwitchProps> = (props) => (
  <div>
    <button onClick={props.changeThemeBlue}> Blue </button>
    <button onClick={props.changeThemeTeal}> Teal </button>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch<Action, State>) => ({
  changeThemeBlue: () => { dispatch(changeTheme('BlueTheme')); },
  changeThemeTeal: () => { dispatch(changeTheme('TealTheme')); },
});

export default connect(undefined, mapDispatchToProps)(ThemeSwitch);
