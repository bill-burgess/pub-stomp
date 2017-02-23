module.exports = {
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
    },
  ],
  filters: {
    sports: {
      dota2: true,
      hearthstone: true,
      starCraft2: true
    },
    date: {
      select: 0,
      0: null,
      1: null
    }
  }
}
