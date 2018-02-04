import React from "react";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Routes from "../Routes/Routes";

interface RootProps{
  store: Object,
  history: History
}

const Root: React.StatelessComponent<RootProps> = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default Root;
