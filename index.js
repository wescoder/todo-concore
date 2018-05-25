require = require('esm')(module) //eslint-disable-line no-global-assign

const { startServer } = require('./server')
const { NODE_ENV } = require('./env')

if (!['test'].includes(NODE_ENV)) {
  startServer()
}
