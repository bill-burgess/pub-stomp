exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      return Promise.all([
        knex('matches').insert(
          {
            id: 1,
            sport: 'dota2',
            tournament: 'SL i-League Season 3',
            team1: 1,
            team2: 2,
            date: '2017-02-24'
          }
        ),
        knex('matches').insert(
          {
            id: 2,
            sport: 'dota2',
            tournament: 'SL i-League Season 3',
            team1: 3,
            team2: 4,
            date: '2017-02-25'
          }
        ),
        knex('matches').insert(
          {
            id: 3,
            sport: 'hearthstone',
            tournament: 'ESL Trinity Series',
            team1: 5,
            team2: 6,
            date: '2017-03-25'
          }
        ),
        knex('matches').insert(
          {
            id: 4,
            sport: 'starCraft2',
            tournament: 'starCraft2 world champs',
            team1: 17,
            team2: 41,
            date: '2017-04-07'
          }
        )
      ])
  })
}
