/* tslint:disable:no-implicit-dependencies */

import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

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
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.eot$/,
        loader: "url-loader",
        query: {
          limit: 65000,
          name: "[name].[hash].[ext]",
          minetype: "application/vnd.ms-fontobject",
        },
      },
      {
        test: /\.woff2$/,
        loader: "url-loader",
        query: {
          limit: 65000,
          name: "[name].[hash].[ext]",
          mimetype: "application/font-woff",
        },
      },
      {
        test: /\.ttf$/,
        loader: "url-loader",
        query: {
          limit: 65000,
          name: "[name].[hash].[ext]",
          minetype: "application/x-font-ttf",
        },
      },
      {
        test: /\.svg$/,
        loader: "url-loader",
        query: { limit: 10000, minetype: "image/svg+xml" },
      },
    ],
  },
  plugins: [
    /**
     * Plugin: NamedModulesPlugin
     *
     * @see https://webpack.js.org/plugins/named-modules-plugin/
     */
    new webpack.NamedModulesPlugin(),
    /**
     * Plugin: HotModuleReplacementPlugin
     *
     * @see https://webpack.js.org/plugins/hot-module-replacement-plugin/
     */
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
      chunks: ["reactHotLoaderPath", "main"],
      minify: {
        collapseWhitespace: false,
        removeComments: false,
      },
    }),
    /**
     * Plugin: DefinePlugin, strigify in source code
     *
     * @see https://webpack.js.org/plugins/define-plugin/
     */
    new webpack.DefinePlugin({
      "process.env.NODE_ENV":  JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};

export default config;
