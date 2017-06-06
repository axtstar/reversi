// webpack.config.js
module.exports = {
  entry: {
      othelloBase: ['./src/othelloBase.jsx'],
      othelloOne: ['./src/othelloOne.jsx'],
      reversi: ['./src/reversi.jsx'],
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