import React from "react";

import { hot } from "react-hot-loader"
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { ConnectedRouter } from "connected-react-router";

import Routes from "./Routes/Routes";
import Theming from "./Theming/Theming";

const Root = ({ store, history }) => (
  <AppContainer>
    <Provider store={store}>
      <Theming>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Theming>
    </Provider>
  </AppContainer>
);

export default hot(module)(Root);
