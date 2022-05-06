const path = require("node:path");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "source-map" : undefined,
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  entry: "./src/index.jsx",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      {
        // 拡張子 css のファイル（正規表現）
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
