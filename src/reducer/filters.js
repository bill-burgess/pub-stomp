const clone = require('clone')

const initialState = require('../../state')
module.exports = function filters (state = initialState.filters, action) {
  switch (action.type) {

    case 'TOGGLE_SPORT':
      // const newState = clone(state)
      // newState.sports[action.payload] = !newState.sports[action.payload]
      // return newState
      return Object.assign({}, state, {
        sports: Object.assign({}, state.sports, {
          [action.payload]: !state.sports[action.payload]
        })
      })

    default:
      return state
  }
}
