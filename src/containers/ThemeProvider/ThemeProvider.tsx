import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { MuiThemeProviderProps } from "material-ui/styles/MuiThemeProvider";
import { Theme } from "material-ui/styles/createMuiTheme";
import { connect } from "react-redux";

const ThemeProvider: React.StatelessComponent = ({ theme, children }: MuiThemeProviderProps) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

const mapStateToProps = ({ theme }: { theme: Theme }) => ({
  theme,
});

export default connect(mapStateToProps)(ThemeProvider);
