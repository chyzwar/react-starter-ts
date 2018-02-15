import React from "react";
import Button from "material-ui/Button/Button";

import { connect } from "react-redux";
import { changeTheme } from "../actions/ThemeActions";
import { Dispatch } from "../types/Dispatch";

interface ThemeSwitchProps {
  changeThemeBlue(): void;
  changeThemeTeal(): void;
}

const ThemeSwitch: React.SFC<ThemeSwitchProps> = (props) => (
  <div>
    <Button variant="raised" color="secondary" onClick={props.changeThemeBlue}> Blue </Button>
    <Button variant="raised" color="secondary" onClick={props.changeThemeTeal}> Teal </Button>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeThemeBlue: () => { dispatch(changeTheme("BlueTheme")); },
  changeThemeTeal: () => { dispatch(changeTheme("TealTheme")); },
});

export default connect(undefined, mapDispatchToProps)(ThemeSwitch);
