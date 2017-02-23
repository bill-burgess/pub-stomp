const test = require('tape')
const freeze = require('deep-freeze')

const reducer = require('../../src/reducer')
const initialState = require('../../state')

test('TOGGLE_SPORT | toggles the boolean value of the selected sport', t => {

  freeze(initialState)

  const action = {type: 'TOGGLE_SPORT', payload: 'dota2'}

  const expectedState = Object.assign({}, initialState, {
    filters: Object.assign({}, initialState.filters, {
      sports: {
        dota2: false,
        hearthstone: true,
        starCraft2: true
      }
    })
  })

  const newState = reducer(initialState, action)

  t.deepEqual(newState, expectedState, 'should change a true value to false')

  t.end()
})
