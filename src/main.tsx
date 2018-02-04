import React from "react";
import ReactDOM from "react-dom";

import history from "./constants/History";

async function bootstrap(): Promise<void> {
  let Root, configureStore;
  
  switch (process.env.NODE_ENV) {
    case "development":
      Root: React.StatelessComponent = await import(
        /* webpackChunkName: "Root" */ "./containers/Root/Root.dev",
      );
      configureStore: Function = await import(
        /* webpackChunkName: "configureStore" */ "./store/configureStore.dev",
      );

      ReactDOM.render(
        <Root store={configureStore()} history={history} />,
        document.getElementById("root"),
       );
      break;
    case "production":
      Root: React.StatelessComponent = await import(
        /* webpackChunkName: "Root" */ "./containers/Root/Root.prod",
      );
      configureStore: Function = await import(
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
  .then(() => console.log("Application Started"))
  .catch((error) => console.log(`Application error: ${error}`));
