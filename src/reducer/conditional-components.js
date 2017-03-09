const initialState = require('../../state')
module.exports = function conditionalComponents (state = initialState.conditionalComponents, action) {
  switch (action.type) {
    case 'SHOW_COMPONENT':
      const newState = Object.assign({}, state, {
        [action.payload]: true
      })
      return newState

    default:
      return state
  }
}
