import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { ConnectedRouter } from "connected-react-router";

import GlobalStyles from "../components/GlobalStyles";
import AppDrawer from "../components/AppDrawer";
import RootProps from "./RootProps";
import Routes from "../components/Routes";
import ThemeProvider from "./ThemeProvider";

const Root: React.SFC<RootProps> = ({ store, history }) => (
  <React.StrictMode>
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
  </React.StrictMode>
);

export default hot(Root);
