const test = require('tape')
const freeze = require('deep-freeze')

const reducer = require('../../src/reducer')
const initialState = require('../../state')

test('UPDATE_TEAMS | should change the teams to the payload of the action', t => {

  freeze(initialState)

  const action = {type: 'UPDATE_TEAMS', payload: [
    {
      id: 1,
      sport: 'dota2',
      name: 'Digital Chaos',
      rank: 3
    },
    {
      id: 2,
      sport: 'dota2',
      name: 'Wings Gaming',
      rank: 7
    }
  ]
}

  const expectedState = Object.assign({}, initialState, {
    teams: [
      {
        id: 1,
        sport: 'dota2',
        name: 'Digital Chaos',
        rank: 3
      },
      {
        id: 2,
        sport: 'dota2',
        name: 'Wings Gaming',
        rank: 7
      }
    ]
  })

  const newState = reducer(initialState, action)

  t.deepEqual(newState, expectedState, 'should add the teams into the state')

  t.end()
})
