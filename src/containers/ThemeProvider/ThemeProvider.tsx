import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { Theme } from "material-ui/styles/createMuiTheme";
import { connect } from "react-redux";

interface ThemeProviderProps{
  theme: Theme;
  children: React.ReactChildren;
}

const ThemeProvider: React.SFC<ThemeProviderProps> = ({ theme, children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

const mapStateToProps = ({ theme }: { theme: Theme }) => ({
  theme,
});

export default connect(mapStateToProps)(ThemeProvider);
