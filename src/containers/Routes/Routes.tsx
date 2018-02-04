import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router";


import Viewer from "./Viewer/Viewer";
import Create from "./Create/Create";
import History from "./History/History";
import Manage from "./Manage/Manage";

const Routes = () => (
  <Switch>
    <Route
      path="/"
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
      path="/history"
      component={History}
    />
    <Route
      exact
      path="/manage"
      component={Manage}
    />
  </Switch>
);

export default Routes;
