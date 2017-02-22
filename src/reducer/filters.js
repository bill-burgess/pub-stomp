const initialState = require('../../state')
module.exports = function filters (state = initialState.filters, action) {
  switch (action.type) {

    case 'TOGGLE_SPORT':
      return Object.assign({}, state, {
        sports: {
          state.sports[action.payload]: !sports[action.payload]
        }
      })

    default:
      return state
  }
}
