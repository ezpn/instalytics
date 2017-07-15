var path = require('path');

console.log(path.join(__dirname, 'node_modules'));

module.exports = {
  entry: './app.module.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../web/js'),
    publicPath: path.resolve(__dirname, '../web')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      }, {
        test: /\.html$/,
        use: [ 'html-loader' ]
      }, {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  devtool: '#inline-source-map'
};
