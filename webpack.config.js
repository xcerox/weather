const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "public/js"),   // absolute path where it's gonna be the file
    publicPath: '/js/',                           // relative path where it's gonna be the file
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      Utils: path.resolve(__dirname, 'src/utils/'),
      Actions: path.resolve(__dirname, 'src/actions/'),
      Reducers: path.resolve(__dirname, 'src/reducers/'),
      Constants: path.resolve(__dirname, 'src/utils/constants/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      Components: path.resolve(__dirname, 'src/components/'),
      
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    open: true,
    port: 4200,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
