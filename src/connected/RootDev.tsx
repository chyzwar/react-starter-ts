import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { ConnectedRouter } from "react-router-redux";

import GlobalStyles from "../components/GlobalStyles";
import AppDrawer from "../components/AppDrawer";
import RootProps from "./RootProps";
import Routes from "../components/Routes";
import ThemeProvider from "./ThemeProvider";

const Root: React.SFC<RootProps> = ({ store, history }) => (
  <AppContainer>
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
  </AppContainer>
);

export default hot(module)(Root);
