const { combineReducers } = require('redux')

const events = require('./events')
const displayedEvents = require('./displayed-events')

module.exports = combineReducers({
  events,
  displayedEvents
})
