const initialState = require('../../state')
module.exports = function teams (state = initialState.teams, action) {
  switch (action.type) {
    case 'UPDATE_TEAMS':
      return action.payload

    default:
      return state
  }
}
