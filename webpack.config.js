const path = require("path");
//const webpack = require("webpack");

module.exports = {
  // file that compilations would be built from
  entry: [path.resolve(__dirname, "./nipro/frontend/src/index.js")],
  output: {
    // where compiled files go
    path: path.resolve(__dirname, "./nipro/frontend/static/frontend/"),
    // (127.0.0.1/static/frontend/ where files are served from)
    publicPath: "./static/frontend/", // without this line webpack serve will not compile the bundle.js
    filename: "bundle.js", // this is the name of the compiled file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/, // this allows files to be saved as either .js , .jsx or .mjs
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // this allows css to be written and imported in the react folders
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
