const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'script.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true
  }
}