const { combineReducers } = require('redux')

const matches = require('./matches')
const filters = require('./filters')
const teams = require('./teams')

module.exports = combineReducers({
  matches,
  filters,
  teams
})
