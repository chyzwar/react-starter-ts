import React from "react";

import { Provider } from "react-redux";
import { ConnectedRouter } from 'react-router-redux'

import ThemeProvider from "../ThemeProvider/ThemeProvider";
import Routes from "../Routes/Routes";
import RootProps from "./RootProps";

const Root: React.StatelessComponent<RootProps> = ({ store, history }) => (
  <Provider store={store}>
    <ThemeProvider>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);

export default Root;
