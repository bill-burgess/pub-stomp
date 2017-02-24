
exports.up = function(knex, Promise) {
  return knex.schema.createTable('matches', table => {
    table.increments()
    table.string('tournament')
    table.string('sport')
    table.integer('team1')
    table.integer('team2')
    table.string('date')
    table.integer('time')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('matches')
};
