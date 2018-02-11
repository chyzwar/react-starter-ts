import React from "react";
import ReactDOM from "react-dom";

import history from "./constants/History";

import RootDev from "./containers/Root/Root.dev";
import configureStoreDev from "./store/configureStore.dev";

import RootProd from "./containers/Root/Root.prod";
import configureStoreProd from "./store/configureStore.prod";

console.time("Application started in");
switch (process.env.NODE_ENV) {
  case "development":
    {
      ReactDOM.render(
        <RootDev store={configureStoreDev()} history={history} />,
        document.getElementById("root"),
      );
    }
    break;
  case "production":
    {
      ReactDOM.render(
        <RootProd store={configureStoreProd()} history={history} />,
        document.getElementById("root"),
      );
    }
    break;
  default:
    throw new Error(`Invalid NODE_ENV: ${process.env.NODE_ENV}`);
}
console.timeEnd("Application started in");
