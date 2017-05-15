const initialState = require('../../state')
module.exports = function loggedIn (state = initialState.loggedIn, action) {
  switch (action.type) {

    case 'LOGIN':
      return action.payload

    default:
      return state
  }
}
