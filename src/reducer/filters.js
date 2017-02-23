const initialState = require('../../state')
module.exports = function filters (state = initialState.filters, action) {
  switch (action.type) {

    case 'TOGGLE_SPORT':
      return Object.assign({}, state, {
        sports: Object.assign({}, state.sports, {
          [action.payload]: !state.sports[action.payload]
        })
      })

    default:
      return state
  }
}
