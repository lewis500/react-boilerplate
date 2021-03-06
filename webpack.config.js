const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: resolve(__dirname),
  entry: {
    main: "./src/main.tsx"
  },
  output: {
    path: resolve(__dirname, "public"),
    publicPath: "/",
    filename: "[name].js"
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src", "index.html")
    })
  ],
  // devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: resolve(__dirname, "src"),
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-modules-typescript-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      src: resolve(__dirname, "src")
    },
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  }
};
