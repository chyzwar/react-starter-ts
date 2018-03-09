/* tslint:disable:no-implicit-dependencies */

import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";

import { resolve } from "path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

// @ts-ignore
const config: webpack.Configuration  =  {
  mode: "production",
  /**
   * Application Entry points the application.
   *
   * @see https://webpack.js.org/configuration/entry-context/#entry
   */
  entry: {
    /**
     * Application main entry point
     */
    main: "./src/main.tsx",
  },
  output: {
    /**
     * The publicPath specifies the public URL address of the output files when referenced
     *
     * @see  https://webpack.js.org/guides/public-path/
     */
    publicPath: "/",
    /**
     * The output directory as absolute path (required).
     *
     * @see https://webpack.js.org/configuration/output/#output-path
     */
    path: resolve("dist"),
  },
  resolve: {
    /**
     * Roots for module resolution
     *
     * @see https://webpack.js.org/configuration/resolve/#resolve-modules
     */
    modules: [
      resolve("node_modules"),
    ],
    /**
     * An array of extensions that should be used to resolve modules.
     *
     * @see https://webpack.js.org/configuration/resolve/#resolve-extensions
     */
    extensions: [".ts", ".tsx", ".js"],
  },
  /**
   * DevServer Configuration when running using webpack cli
   *
   * @see https://webpack.js.org/configuration/dev-server/#devserver
   */
  devServer: {
    historyApiFallback: true,
    compress: false,
    port: 8080,
    hot: false,
    inline: false,
    overlay: true,
  },
  target: "web",
  module: {
    rules: [
      {
        test: /(\.tsx|\.ts)$/,
        exclude: /node_modules/,
        use: [
          { loader: "ts-loader"},
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /src/,
          name: false,
          chunks: "all",
          enforce: true,
        },
        vendor: {
          test: /node_modules/,
          name: false,
          chunks: "all",
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
    /**
     * Plugin CleanWebpackPlugin
     * Description: Clean build folder.
     *
     * @see https://github.com/johnagan/clean-webpack-plugin
     */
    new CleanWebpackPlugin([
      "dist",
      "coverage",
     ],
    ),
    /**
     * HtmlWebpackPlugin configuration
     *
     * @see https://webpack.js.org/plugins/html-webpack-plugin/
     */
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: false,
        removeComments: false,
      },
    }),
  ],
};

export default config;
