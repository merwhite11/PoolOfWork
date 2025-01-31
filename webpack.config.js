const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require('path');
const webpack = require('webpack');
//load variables from .env
require('dotenv').config();

module.exports = (env, argv) => {

  const isProduction = argv.mode === 'production';

  return {

    entry: __dirname + "/src/index.js",
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif|pdf)$/,
          type: "asset/resource",
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'), // Path to your HTML template file
        filename: 'index.html', // Output filename for the generated HTML file
        favicon: "./src/assets/Images/favicon.png"
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.PUBLIC_URL': JSON.stringify('/'),
        'process.env.CDN_URL': JSON.stringify(process.env.CDN_URL),
        'process.env.data-token': JSON.stringify(process.env.data-token)
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'src/assets/Epubs'), to: 'Epubs' },
          { from: path.resolve(__dirname, 'src/assets/Resume'), to: 'Resume' },
          { from: path.resolve(__dirname, 'src/assets/Images'), to: 'Images' },
          { from: path.resolve(__dirname, 'src/assets/BookCovers'), to: 'BookCovers' },
        ]
      })
    ],
    devServer: {
      historyApiFallback: true,
      hot: true
    }
  };
}