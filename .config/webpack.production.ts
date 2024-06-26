import baseConfig from "./webpack.common"

import * as webpack from "webpack"
import { rootPath, srcPath } from "./scripts/webpack.paths"
import { merge } from "webpack-merge"
import * as path from "path"


import { dependencies as externals } from "./scripts/externals.json"

const config: webpack.Configuration = {
  target: "web",
  entry: [
    "core-js",
    "regenerator-runtime/runtime",
    path.join(srcPath, "client/index.tsx")
  ],
  mode: "production",
  output: {
    clean:true,
    path: path.join(rootPath, "dist"),
    filename: "index.js",
    library: {
      type: "umd",
      name:"bi-ui-hooks"
    },
    globalObject: "this",
    umdNamedDefine: true,
  },

  module: {
    rules: [
      {
        test: /\.[t]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
    })
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      src: srcPath,
    }
  },
  externals: [...Object.keys(externals || {})],
  performance: {
    hints: false,
  },
  devtool: "source-map",

}

export default merge(baseConfig, config)
