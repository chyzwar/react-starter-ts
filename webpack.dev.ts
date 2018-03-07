/* tslint:disable:no-implicit-dependencies */

import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration  =  {
  devtool: "inline-source-map",
  cache: true,
  /**
   * Application Entry points the application.
   *
   * @see https://webpack.js.org/configuration/entry-context/#entry
   */
  entry: {
    /**
     * Include react as additional entry
     */
    react: [
      "react",
      "react-dom",
    ],
    /**
     * Application main entry point
     */
    main: "./src/main.tsx",
  },
  output: {
    /**
     * The publicPath specifies the public URL address of the output files when referenced
     *
     * @see https://webpack.js.org/guides/public-path/
     */
    publicPath: "/",
    /**
     * The output directory as absolute path (required).
     *
     * @see https://webpack.js.org/configuration/output/#output-path
     */
    path: path.resolve("dist"),
    /**
     * Specifies the name of each output file on disk.
     *
     * @see https://webpack.js.org/configuration/output/#output-filename
     */
    filename: "[name].[hash].js",
    /**
     * Configure how source maps are named
     *
     * @see https://webpack.js.org/configuration/output/#output-sourcemapfilename
     */
    sourceMapFilename: "[name].[hash].map",
  },
  resolve: {
    /**
     * Roots for module resolution
     *
     * @see https://webpack.js.org/configuration/resolve/#resolve-modules
     */
    modules: [
      path.resolve("node_modules"),
    ],
    /**
     * An array of extensions that should be used to resolve modules.
     *
     * @see https://webpack.js.org/configuration/resolve/#resolve-extensions
     */
    extensions: [".ts", ".tsx", ".js"],
  },
  /**
   * DevServer Configuration
   *
   * @see https://webpack.js.org/configuration/dev-server/#devserver
   */
  devServer: {
    historyApiFallback: true,
    compress: false,
    port: 8080,
    hot: true,
    inline: true,
    overlay: true,
  },
  target: "web",
  module: {
    rules: [
      {
        test: /(\.tsx|\.ts)$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader" },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /**
     * HtmlWebpackPlugin configuration
     *
     * @see https://webpack.js.org/plugins/html-webpack-plugin/
     */
    new HtmlWebpackPlugin({
      title: "React Starter Application",
      template: "src/index.html",
      filename: "index.html",
      chunksSortMode: "manual",
      chunks: ["react", "main"],
      minify: {
        collapseWhitespace: false,
        removeComments: false,
      },
    }),
  ],
};

export default config;
