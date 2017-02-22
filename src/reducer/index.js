const { combineReducers } = require('redux')

const matches = require('./matches')
const filters = require('./filters')

module.exports = combineReducers({
  matches,
  filters
})
