// webpack.config.js
module.exports = {
  entry: {
      reversi: ['./src/reversi.jsx'],
      future: ['./src/future.jsx'],
     unit: ['./test/unit.jsx']
  },
  output: {
    path: './lib/',
    filename: '[name].js'
  },
  devtool: "source-map",
  module: {
       loaders: [ { loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015', 'stage-3']
            }
        }
       ]
  }
};