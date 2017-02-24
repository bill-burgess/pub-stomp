const initialState = require('../../state')
module.exports = function matches (state = initialState.matches, action) {
  switch (action.type) {
    case 'UPDATE_MATCHES':
      return action.payload

    default:
      return state
  }
}
