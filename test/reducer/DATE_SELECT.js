const test = require('tape')
const freeze = require('deep-freeze')

const reducer = require('../../src/reducer')
const initialState = require('../../state')

test('TOGGLE_SPORT | toggles the boolean value of the selected sport', t => {

  freeze(initialState)

  const action = {type: 'DATE_SELECT', payload: '2017-02-24'}

  const expectedState = Object.assign({}, initialState, {
    filters: Object.assign({}, initialState.filters, {
      date: {
        select: 1,
        0: '2017-02-24',
        1: null
      }
    })
  })

  const newState = reducer(initialState, action)

  t.deepEqual(newState, expectedState, 'should change first date to payload and set select to 1')

  const action2 = {type: 'DATE_SELECT', payload: '2017-02-27'}

  const expectedState2 = Object.assign({}, initialState, {
    filters: Object.assign({}, initialState.filters, {
      date: {
        select: 0,
        0: '2017-02-24',
        1: '2017-02-27'
      }
    })
  })

  const newState2 = reducer(initialState, action)

  t.deepEqual(newState2, expectedState2, 'should change second date and select back to 0')

  t.end()
})
