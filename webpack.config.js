const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  module:       {
    rules: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        use:     ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      }
    ]
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test:    /node_modules/,
          chunks:  'initial',
          name:    'vendor',
          enforce: true
        },
      }
    }
  },
  plugins:      [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      chunks: ['vendor','main'],
    })
  ]
};
