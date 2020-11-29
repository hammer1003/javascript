const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

/*
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
  mode: "development",
  entry: { myfile: "./app.js" },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/main.js",
    publicPath: "/assets/"
  },
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, "dist"),
    writeToDisk: true,
    hot: true
  },
  plugin: [new HotModuleReplacementPlugin()]
};
