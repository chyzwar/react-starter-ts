import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { Theme } from "material-ui/styles/createMuiTheme";
import { connect } from "react-redux";
import { State } from "../../types/State";

interface ThemeProviderProps{
  theme: Theme;
  children: React.ReactNode;
}

const ThemeProvider: React.SFC<ThemeProviderProps> = ({ theme, children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

const mapStateToProps = (state: State) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(ThemeProvider);
