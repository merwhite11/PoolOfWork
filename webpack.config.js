const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  //need to have an entry point for scss main
  // entry: path.join(__dirname, "src", "index.js"),

  entry: __dirname + "/src/index.js",
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
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
      // {
      //   test: /\.epub$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'epubs'
      //       },
      //     }
      //   ],
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'), // Path to your HTML template file
      filename: 'index.html', // Output filename for the generated HTML file
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.PUBLIC_URL': JSON.stringify('/'),
      // 'process.env.CDN_URL': JSON.stringify(process.env.NODE_ENV === 'development'
      //   ? process.env.DEV_CDN_URL
      //   : process.env.PROD_CDN_URL)
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'src/assets/Epubs'), to: 'Epubs'}
      ]
    }),
    new Dotenv()
  ],
  devServer: {
      historyApiFallback: true,
      // contentBase: path.resolve(__dirname, 'build'),
      hot: true
    }
};