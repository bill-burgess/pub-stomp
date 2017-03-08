
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', table => {
    table.increments()
    table.string('sport')
    table.string('name')
    table.integer('rank')
  })
};

exports.down = function(knex, Promise) {

};
