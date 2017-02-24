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
            team1: 4,
            team2: 2,
            date: '2017-02-24'
          }
        ),
        knex('matches').insert(
          {
            id: 2,
            sport: 'dota2',
            tournament: 'SL i-League Season 3',
            team1: 16,
            team2: 31,
            date: '2017-02-25'
          }
        ),
        knex('matches').insert(
          {
            id: 3,
            sport: 'hearthstone',
            tournament: 'ESL Trinity Series',
            team1: 14,
            team2: 8,
            date: '2017-03-25'
          }
        )
      ])
      // Inserts seed entries
  })
}
