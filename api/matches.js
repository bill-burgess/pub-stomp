const express = require('express')
const route = express.Router()

const db = require('../db')

module.exports = function(db){
  route.get('/', getAllMatches)

  function getAllMatches(req, res, next){
    db.getAllMatches(err, res => {
      res.json({ok: true, matches: res.matches})
    })
  }


  return route
}
