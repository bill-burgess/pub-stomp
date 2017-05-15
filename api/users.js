const express = require('express')
const bcrypt = require('bcryptjs')
const route = express.Router()

module.exports = function(db){

  route.post('/login', login)

  function login(req, res, next){
    res.json({login: true, user: req.body.email})
  }

  return route
}
