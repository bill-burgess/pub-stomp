const express = require('express')
const route = express.Router()

module.exports = function(db){
  route.get('/', getAllMatches)

  function getAllMatches(req, res, next){
    db.getAllMatches((err, response) => {
      if(err) res.json({ok: false, error: 'Cannot connect to db'})
      res.json({ok: true, matches: response})
    })
  }


  return route
}
