import React from "react";
import { Route, Switch } from "react-router";

import Viewer from "../connected/Viewer";
import Create from "../connected/Create";
import Manage from "../connected/Manage";

const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={Viewer}
    />
    <Route
      path="/view"
      exact
      component={Viewer}
    />
    <Route
      exact
      path="/create"
      component={Create}
    />
    <Route
      exact
      path="/manage"
      component={Manage}
    />
  </Switch>
);

export default Routes;
