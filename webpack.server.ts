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
  resolve(WEBPACK_CONFIG),
);

/**
 * DevServer Configuration
 *
 * @see https://webpack.js.org/configuration/dev-server/
 */
const devServerConfig: WebpackDevServer.Configuration = {
  overlay: true,
  inline: true,
  hot: true,
  open: true,
  historyApiFallback: true,
  host: "localhost",
  contentBase: "dist",
  /**
   * Webpack Stats options
   *
   * @see https://webpack.js.org/configuration/stats/
   */
  stats: {
    colors: true,
    depth: true,
    env: true,
  },
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, devServerConfig);

const compiler = Webpack(webpackConfig);

const devServer = new WebpackDevServer(compiler, devServerConfig);

devServer.listen(8080, "localhost", () => {
  console.info(`
  Started DevServer on http://localhost:${PORT}
    WEBPACK_CONFIG: ${WEBPACK_CONFIG}
    NODE_ENV: ${NODE_ENV}
    PORT: ${PORT}
  `);
});
