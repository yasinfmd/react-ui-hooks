import baseConfig from "./webpack.common";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import * as webpack from 'webpack';
import {rootPath, srcPath} from "./scripts/webpack.paths";

import {merge} from 'webpack-merge';
import * as path from "path";

const HtmlWebpackPlugin = require("html-webpack-plugin")
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
const port = process.env.PORT || 3000

const config: Configuration  = {
  target: "web",
  entry: path.join(srcPath, "index.tsx"),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(rootPath, "public/index.html")
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    })
  ],
  devServer: {
    //host: "local-ip",
    port,
    historyApiFallback: true,
    open: true,
    compress: true,
  },
  devtool: "inline-source-map",

}

export default merge(baseConfig, config)
