import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTSCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript"
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".jsx",
      ".js"
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    new ForkTSCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: [
        "js",
        "jsx",
        "ts",
        "tsx"
      ]
    }),
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
}

export default config;