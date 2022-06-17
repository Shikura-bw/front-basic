const config = require('./config')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const globImporter = require('node-sass-glob-importer')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')

module.exports = env => {
  return {
    mode: env && env.production ? 'production' : 'development',
    entry: {
      'assets/js/app': path.resolve(__dirname, config.path.src + 'assets/js/index.js'),
      'assets/js/main/script_app': path.resolve(__dirname, config.path.src + 'assets/js/main/index.js'),
      'assets/css/style.css': path.resolve(__dirname, config.path.src + 'assets/scss/style.scss'),
      'assets/css/main/style_add.css': path.resolve(__dirname, config.path.src + 'assets/scss/main/style_add.scss')
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, config.path.dest),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(scss|css)/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  importer: globImporter(),
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new FixStyleOnlyEntriesPlugin({extensions: ['scss', 'css']}),
      new MiniCssExtractPlugin({filename: '[name]'}),
    ],
    devtool: env && env.production ? '' : 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist/'),
      port: 8200,
      open: true,
      hotOnly: true,
      historyApiFallback: true,
      publicPath: 'http://localhost:8200/',
    },
  }
}
