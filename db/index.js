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
    }
  }
}
