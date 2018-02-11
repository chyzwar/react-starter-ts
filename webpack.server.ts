/* tslint:disable:no-implicit-dependencies */

import { resolve } from "path";
import * as Webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";

const {
  WEBPACK_CONFIG = "webpack.dev.js",
  NODE_ENV = "development",
  PORT = 8080,
} = process.env;

/**
 * Require configuration, alias default export
 */
const { default: webpackConfig } = require(
  resolve(WEBPACK_CONFIG)
);

const compiler = Webpack(webpackConfig);

/**
 * DevServer Configuration
 *
 * @see https://webpack.js.org/configuration/dev-server/
 */
const devServerConfig: WebpackDevServer.Configuration = {
  hot: true,
  inline: true,
  historyApiFallback: true,
  overlay: true,
};

const devServer = new WebpackDevServer(compiler, devServerConfig);

devServer.listen(PORT, "localhost", () => {
  console.info(`
  Started DevServer on http://localhost:${PORT}
    WEBPACK_CONFIG: ${WEBPACK_CONFIG}
    NODE_ENV: ${NODE_ENV}}
    PORT: ${PORT}
  `);
});
