const test = require('tape')
const freeze = require('deep-freeze')

const reducer = require('../../src/reducer')
const initialState = require('../../state')

test('UPDATE_MATCHES | should change the matches to the payload of the action', t => {

  freeze(initialState)

  const action = {type: 'UPDATE_MATCHES', payload: [
    {
      sport: 'dota2',
      id: 1,
      tournament: 'SL i-League Season 3',
      team1: {name: 'Digital Chaos', rank: 3},
      team2: {name: 'Wings Gaming', rank: 7},
      date: '2017-02-24'
    },
    {
      sport: 'dota2',
      id: 2,
      tournament: 'SL i-League Season 3',
      team1: {name: 'Walrus Punch!', rank: 120},
      team2: {name: 'Tarantula', rank: 137},
      date: '2017-02-25'
    },
    {
      sport: 'hearthstone',
      id: 3,
      tournament: 'ESL Trinity Series',
      team1: {name: 'Tempo Storm', rank: 12},
      team2: {name: 'G2 Esports HS', rank: 4},
      date: '2017-03-25'
    }
  ]
}

  const expectedState = Object.assign({}, initialState, {
    matches: [
      {
        sport: 'dota2',
        id: 1,
        tournament: 'SL i-League Season 3',
        team1: {name: 'Digital Chaos', rank: 3},
        team2: {name: 'Wings Gaming', rank: 7},
        date: '2017-02-24'
      },
      {
        sport: 'dota2',
        id: 2,
        tournament: 'SL i-League Season 3',
        team1: {name: 'Walrus Punch!', rank: 120},
        team2: {name: 'Tarantula', rank: 137},
        date: '2017-02-25'
      },
      {
        sport: 'hearthstone',
        id: 3,
        tournament: 'ESL Trinity Series',
        team1: {name: 'Tempo Storm', rank: 12},
        team2: {name: 'G2 Esports HS', rank: 4},
        date: '2017-03-25'
      }
    ]
  })

  const newState = reducer(initialState, action)

  t.deepEqual(newState, expectedState, 'should add the matches into the state')

  t.end()
})
