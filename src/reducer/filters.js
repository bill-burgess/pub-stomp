const initialState = require('../../state')
module.exports = function filters (state = initialState.filters, action) {
  switch (action.type) {

    case 'TOGGLE_SPORT':
      return Object.assign({}, state, {
        sports: Object.assign({}, state.sports, {
          [action.payload]: !state.sports[action.payload]
        })
      })

    case 'DATE_SELECT':
      const newSelect = state.date.select ? 0 : 1
      return Object.assign({}, state, {
        date: Object.assign({}, state.date, {
          select: newSelect,
          [state.date.select]: action.payload
        })
      })

    default:
      return state
  }
}
