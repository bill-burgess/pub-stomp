module.exports = function (knex) {
  return {
    getAllMatches: cb => {
      return knex('matches')
        .select()
        .then(res => {
          cb(null, res)
        })
        .catch(err => {
          cb(err, null)
        })
    },
    findEntryByField: (table, field, entry, cb) => {
      return knex(table)
        .select()
        .where(field, entry)
        .then(res => {
          cb(null, res)
        })
        .catch(err => {
          cb(err, null)
        })
    },
    createNewUser: (user, cb) => {
      return knex('users')
        .insert(user)
        .then(ids => {
          return knex('users')
            .select('id', 'email', 'location')
            .where('id', ids[0])
            .then(users => {
              cb(null, users[0])
            })
            .catch(err => {
              cb(err, null)
            })
        })
    }
  }
}
