const test = require('tape')
const freeze = require('deep-freeze')

const reducer = require('../../src/reducer')
const initialState = require('../../state')

test('TOGGLE_SPORT | toggles the boolean value of the selected sport', t => {

  freeze(initialState)

  const action = {type: 'TOGGLE_SPORT', payload: 'dota2'}

  const expectedState = {
    matches: [
      {
        sport: 'dota2',
        id: 1,
        tournament: 'SL i-League Season 3',
        team1: {name: 'Digital Chaos', rank: 3},
        team2: {name: 'Wings Gaming', rank: 7},
        date: 'Fri Feb 24 2017 18:00:00 GMT+1300 (NZDT)'
      },
      {
        sport: 'dota2',
        id: 2,
        tournament: 'SL i-League Season 3',
        team1: {name: 'Walrus Punch!', rank: 120},
        team2: {name: 'Tarantula', rank: 137},
        date: 'Sat Feb 25 2017 05:00:00 GMT+1300 (NZDT)'
      },
      {
        sport: 'hearthstone',
        id: 3,
        tournament: 'ESL Trinity Series',
        team1: {name: 'Tempo Storm', rank: 12},
        team2: {name: 'G2 Esports HS', rank: 4},
        date: 'Thu Mar 25 2017 07:00:00 GMT+1300 (NZDT)'
      },
    ],
    filters: {
      sports: {
        dota2: false,
        hearthstone: true,
        starCraft2: true
      },
      dateAfter: null,
      dateBefore: null,
    }
  }

  const newState = reducer(initialState, action)

  t.deepEqual(newState, expectedState, 'should change a true value to false')

  t.end()
})
