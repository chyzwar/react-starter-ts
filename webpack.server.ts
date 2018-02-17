/* tslint:disable:no-implicit-dependencies */

import * as path from "path";
import * as Webpack from "webpack";
import * as WebpackDevServer from "webpack-dev-server";

/**
 * Destructure env variable
 * Provide semsible default values
 */
const {
  WEBPACK_CONFIG = "webpack.dev.js",
  NODE_ENV = "development",
  CONTENT_BASE = "dist",
  HOST = "localhost",
  PORT = "8080",
} = process.env;

import  webpackConfig = require(path.resolve(WEBPACK_CONFIG));

/**
 * DevServer Configuration
 *
 * @see https://webpack.js.org/configuration/dev-server/
 */
const devServerConfig: WebpackDevServer.Configuration = {
  overlay: true,
  inline: true,
  hotOnly: true,
  open: true,
  historyApiFallback: true,
  contentBase: CONTENT_BASE,
  host: HOST,
  port: PORT,
  /**
   * Webpack Stats options
   *
   * @see https://webpack.js.org/configuration/stats/
   */
  stats: {
    env: true,
    colors: true,
    depth: true,
  },
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, devServerConfig);

const compiler = Webpack(webpackConfig);

const devServer = new WebpackDevServer(compiler, devServerConfig);

devServer.listen(PORT, HOST,
  (error) => { console.info(`
    Started DevServer on http://localhost:${PORT}
      WEBPACK_CONFIG: ${WEBPACK_CONFIG}
      NODE_ENV: ${NODE_ENV}
      PORT: ${PORT}
  ` );
  },
);
