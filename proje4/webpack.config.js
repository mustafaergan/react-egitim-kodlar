const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env='development') => {

  console.log(`webpack running in ${env} mode`)
    
  return {
      mode: env,
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
      optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
      devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true
    }
  } 
}