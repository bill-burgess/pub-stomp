const { combineReducers } = require('redux')

const events = require('./events')

module.exports = combineReducers({
  events
})
