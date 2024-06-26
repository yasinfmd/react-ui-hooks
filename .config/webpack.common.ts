import {Configuration} from "webpack";
import {  srcPath } from "./scripts/webpack.paths"

const baseConfig: Configuration = {
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
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      src: srcPath,
    }
  },

}


export default baseConfig;
