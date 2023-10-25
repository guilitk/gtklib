
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./gtklib.cjs.production.min.js')
} else {
  module.exports = require('./gtklib.cjs.development.js')
}
