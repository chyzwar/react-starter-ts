import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import GlobalStyles from "../components/GlobalStyles";
import AppDrawer from "../components/AppDrawer";
import ThemeProvider from "./ThemeProvider";
import Routes from "../components/Routes";
import RootProps from "./RootProps";

const Root: React.SFC<RootProps> = ({ store, history }) => (
  <Provider store={store}>
    <ThemeProvider>
      <CssBaseline />
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <AppDrawer>
          <Routes />
        </AppDrawer>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

export default Root;
