const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const resolve = url => path.resolve(__dirname, url);

module.exports = {
  mode: process.env.NODE_ENV,
  entry: resolve('../src/main.ts'),
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash:8].js',
    publicPath: '/',
  },
  devServer: {
    host: 'localhost',
    port: '8005',
    https: true,
    open: true,
    hot: true,
    quiet: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.jsx?$|\.tsx?$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(less|css)$/,
        exclude: [/\.(module.less|module.css)$/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(module.less|module.css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          { loader: 'css-loader', options: { modules: true } },
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path]/[name].[hash:6].[ext]',
              context: 'src/'
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:6].css"
    }),
    new htmlWebpackPlugin({
      inject: true,
      template: resolve('./index.html'),
      title: 'vue3.0 - typescript',
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      "@": resolve('../src')
    },
    extensions: ['.js', '.ts', '.tsx', 'jsx'],
  }
}