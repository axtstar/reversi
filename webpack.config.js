// webpack.config.js
module.exports = {
  entry: {
      othelloBase: ['./lib/othelloBase.js'],
      othelloOne: ['./lib/othelloOne.js'],
      reversi: ['./lib/reversi.js'],
      future: ['./src/future.jsx']
  },
  output: {
    path: './lib/',
    filename: 'bundle.js'
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