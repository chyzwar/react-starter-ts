import React from "react";
import Reboot from "material-ui/Reboot";

import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { ConnectedRouter } from "react-router-redux";

import RootProps from "./RootProps";
import Routes from "../Routes/Routes";
import ThemeProvider from "../ThemeProvider/ThemeProvider";
import AppDrawer from "../AppDrawer";

const Root: React.SFC<RootProps> = ({ store, history }) => (
  <AppContainer>
    <Provider store={store}>
      <ThemeProvider>
        <Reboot />
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
