var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VERSION: '"0.1.0-dev"',
  APP_NAME: '"CORE-dev"'
})
