exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      return Promise.all([
        knex('teams').insert(
          {
            id: 1,
            sport: 'dota2',
            name: 'Digital Chaos',
            rank: 4
          }
        ),
        knex('teams').insert(
          {
            id: 2,
            sport: 'dota2',
            name: 'Wings Gaming',
            rank: 7
          }
        ),
        knex('teams').insert(
          {
            id: 3,
            sport: 'dota2',
            name: 'Wulrus Punch!',
            rank: 120
          }
        ),
        knex('teams').insert(
          {
            id: 4,
            sport: 'dota2',
            name: 'Virtus Pro',
            rank: 16
          }
        ),
        knex('teams').insert(
          {
            id: 5,
            sport: 'hearthstone',
            name: 'Cloud 9',
            rank: 1
          }
        ),
        knex('teams').insert(
          {
            id: 6,
            sport: 'hearthstone',
            name: 'Tempo Storm',
            rank: 7
          }
        )
      ])
  })
}
