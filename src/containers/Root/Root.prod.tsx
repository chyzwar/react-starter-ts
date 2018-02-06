import React from "react";
import Reboot from "material-ui/Reboot";

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux"

import ThemeProvider from "../ThemeProvider/ThemeProvider";
import Routes from "../Routes/Routes";
import RootProps from "./RootProps";

const Root: React.StatelessComponent<RootProps> = ({ store, history }) => (
  <Provider store={store}>
    <ThemeProvider>
      <Reboot />
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

export default Root;
