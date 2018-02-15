import React from "react";
import { Route, Switch } from "react-router";

import Viewer from "./Viewer";
import Create from "./Create";
import Manage from "./Manage";

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
