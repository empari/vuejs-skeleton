var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var routesEnv = require('./routes.env')

module.exports = merge(routesEnv,merge(prodEnv, {
  NODE_ENV: '"development"',
  VERSION: '"0.1.0-dev"',
  APP_ROUTE: '"http://dev.dev:8080/#/"',
  APP_NAME: '"CORE-dev"',
  PROTOCOL: '"https://"',
  API_VERSION: '"v1/"',
  BASE_URL: '"srvempari.com.br/"',
  SUBDOMAIN: '"api-sandbox"',
}))
