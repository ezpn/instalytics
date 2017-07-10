var path = require('path');

module.exports = {
  entry: './front/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../web/js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
