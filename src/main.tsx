import React from "react";
import ReactDOM from "react-dom";
import {Store} from "redux";

import history from "./constants/History";

async function bootstrap(): Promise<void> {
  console.time("Application started in");

  let 
    Root: React.StatelessComponent, 
    configureStore: Function;

  switch (process.env.NODE_ENV) {
    case "development":
      Root = await import(
        /* webpackChunkName: "Root" */ "./containers/Root/Root.dev",
      );
      configureStore = await import(
        /* webpackChunkName: "configureStore" */ "./store/configureStore.dev",
      );

      ReactDOM.render(
        <Root store={configureStore()} history={history} />,
        document.getElementById("root"),
       );
      break;
    case "production":
      const { default: Root } = await import(
        /* webpackChunkName: "Root" */ "./containers/Root/Root.prod",
      );
      configureStore = await import(
        /* webpackChunkName: "configureStore" */ "./store/configureStore.prod",
      );

      ReactDOM.render(
        <Root store={configureStore()} history={history} />,
        document.getElementById("root"),
      );
      break;
    default:
      throw new Error(`Invalid NODE_ENV: ${process.env.NODE_ENV}`);
  }
}

/**
 * Start an application
 */
bootstrap()
  .then(() => console.timeEnd("Application started in"))
  .catch((error) => console.error(`Application error: ${error}`));
