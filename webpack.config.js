const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['env', 'react'],
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      Utils: path.resolve(__dirname, 'src/utils/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Actions: path.resolve(__dirname, 'src/actions/'),
      Reducers: path.resolve(__dirname, 'src/reducers/'),
      Services: path.resolve(__dirname, 'src/utils/services/'),
      Constants: path.resolve(__dirname, 'src/utils/constants/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      Components: path.resolve(__dirname, 'src/components/'),
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],

  devServer: {
    open: true,
    port: 4200,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

  target: 'web',
}