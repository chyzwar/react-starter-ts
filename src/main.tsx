import React from "react";
import ReactDOM from "react-dom";

import history from "./constants/History";
import RootDev from "./connected/RootDev";
import configureStoreDev from "./store/configureStore.dev";
import RootProd from "./connected/RootProd";
import configureStoreProd from "./store/configureStore.prod";

switch (process.env.NODE_ENV) {
  case "development":
    ReactDOM.render(
      <RootDev store={configureStoreDev()} history={history} />,
      document.getElementById("root"),
    );
    break;
  case "production":
    ReactDOM.render(
      <RootProd store={configureStoreProd()} history={history} />,
      document.getElementById("root"),
    );
    break;
  default:
    throw new Error(`Invalid NODE_ENV: ${process.env.NODE_ENV}`);
}
