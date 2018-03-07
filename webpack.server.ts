/* tslint:disable:no-implicit-dependencies */

import Webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import webpackConfig from "./webpack.dev";

/**
 * DevServer Configuration
 *
 * @see https://webpack.js.org/configuration/dev-server/
 */
const devServerConfig: WebpackDevServer.Configuration = {
  host: "localhost",
  overlay: true,
  inline: true,
  hotOnly: true,
  historyApiFallback: true,
  stats: {
    env: true,
    colors: true,
    depth: true,
  },
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, devServerConfig);

const compiler = Webpack(webpackConfig);

const devServer = new WebpackDevServer(compiler, devServerConfig);

devServer.listen(8080, "localhost",
  () => {},
);
