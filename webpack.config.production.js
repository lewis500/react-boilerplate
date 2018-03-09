const path = require("path");
const webpack = require("webpack");
const mapboxApiAccessToken = require("./mapboxToken.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "[name].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        MAPBOX_API_ACCESS_TOKEN: JSON.stringify(mapboxApiAccessToken),
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest"
    }),
    new InlineManifestWebpackPlugin({
      name: "webpackManifest"
    }),
    new ExtractTextPlugin("style.css")
    // new LodashModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src"),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]",
            "postcss-loader",
            "sass-loader"
          ]
        })
      },
      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          {
            loader: "svgr/webpack",
            options: { babel: false }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader",
        include: path.resolve(__dirname, "src"),
        options: {
          limit: 8192,
          name: "[path][name].[hash].[ext]",
          fallback: "file-loader"
        }
      },
      {
        include: path.resolve(__dirname, "src"),
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  // devtool: "cheap-eval-source-map",
  // stats: "verbose",
  resolve: {
    symlinks: false,
    alias: {
      src: path.resolve(__dirname, "src/"),
      components: path.resolve(__dirname, "src/components/"),
      actions: path.resolve(__dirname, "src/actions"),
      constants: path.resolve(__dirname, "src/constants"),
      selectors: path.resolve(__dirname, "src/selectors"),
      style: path.resolve(__dirname, "src/style"),
      reducers: path.resolve(__dirname, "src/reducers")
    },
    extensions: [".js", ".json", ".scss", ".css"]
  }
};