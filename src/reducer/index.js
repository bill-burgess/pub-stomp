const { combineReducers } = require('redux')

const matches = require('./matches')
const filters = require('./filters')
const teams = require('./teams')
const loggedIn = require('./logged-in')
const conditionalComponents = require('./conditional-components')

module.exports = combineReducers({
  matches,
  filters,
  teams,
  loggedIn,
  conditionalComponents
})
