const ForkTsCheckerWebPackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const HTMLWebpckPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpckPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  loaders: [
    {
      test: /\.(gif|svg|jpg|png)$/,
      loader: 'file-loader',
    },
  ],
  entry: path.join(__dirname, 'index.web.js'), //웹 전용 index.web.js 사용
  //entry: path.join(__dirname, 'index.js'),    //웹 앱 코드 같을 때
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig, new ForkTsCheckerWebPackPlugin()],
  devServer: {
    host: '0.0.0.0',
    open: true,
    historyApiFallback: true,
    static: './',
    hot: true,
  },
};
