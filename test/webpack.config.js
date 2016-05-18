// webpack.config.js
module.exports = {
  entry: {
      unit: './unit.jsx',
      reversi:'../src/reversi.jsx'
  },
  output: {
    path: './lib/',
    filename: '[name].js'
  },
  devtool: "source-map",
  module: {
       loaders: [ { loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015', 'stage-3']
            }
        }
       ]
  }
};