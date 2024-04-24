const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path');
const webpack = require('webpack');

console.log(process.env.NODE_ENV);

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
        // use: [
        //   // fallback to style-loader in development
        //       but NODE_ENV is undefined so it will always use MiniCSS
        //   process.env.NODE_ENV === "development"
        //     ? "style-loader"
        //     : MiniCssExtractPlugin.loader,
        //   "css-loader",
        //   "sass-loader",
        // ],
        use: [
          // don't we want the file to extract in dev & prod?
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|pdf)$/,
        type: "asset/resource",
      },
      {
        test: /\.epub$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/src/docs'
            },
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // Path to your HTML template file
      filename: 'index.html', // Output filename for the generated HTML file
      // Other options for customizing the generated HTML file
    }),
    new webpack.DefinePlugin({
      'process.env': {
        PUBLIC_URL: JSON.stringify('/'),
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      // chunkFilename: "[id].css",
    }),
  ],
  devServer: {
      historyApiFallback: true
      // contentBase: path.resolve(__dirname, './public'),
      // hot: true
    }
};