const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const mqpacker = require('css-mqpacker')

module.exports = {
  plugins: [
    autoprefixer({ overrideBrowserslist: ['ie >= 11', 'last 3 versions'] }),
    cssnano({ preset: 'default' }),
    mqpacker(),
  ]
}
