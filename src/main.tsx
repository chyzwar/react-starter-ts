import React from "react";
import ReactDOM from "react-dom";
import history from "./constants/History";

console.time("Application started in");
switch (process.env.NODE_ENV) {
  case "development":
    {
      const Root = require("./containers/Root/Root.dev");
      const configureStore = require("./store/configureStore.dev");

      ReactDOM.render(
        <Root store={configureStore()} history={history} />,
        document.getElementById("root"),
      );
    }
    break;
  case "production":
    {
      const Root = require("./containers/Root/Root.prod");
      const configureStore = require("./store/configureStore.prod");

      ReactDOM.render(
        <Root store={configureStore()} history={history} />,
        document.getElementById("root"),
      );
    }
    break;
  default:
    throw new Error(`Invalid NODE_ENV: ${process.env.NODE_ENV}`);
}
console.timeEnd("Application started in");
