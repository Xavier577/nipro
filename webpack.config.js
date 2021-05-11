const path = require("path");
//const webpack = require("webpack");

module.exports = {
  // file that compilations would be built from
  entry: [path.resolve(__dirname, "./nipro/frontend/src/index.js")],
  output: {
    // where compiled files go
    path: path.resolve(__dirname, "./nipro/frontend/static/frontend/"),
    // 127.0.0.1/static/frontend/public/ where files are served from
    publicPath: "./static/frontend/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  optimization: {
    minimize: true,
  },
  devServer: {
    writeToDisk: true,
  },
  /*   plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ], */
};
