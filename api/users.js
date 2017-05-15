const express = require('express')
const bcrypt = require('bcryptjs')
const route = express.Router()

module.exports = function(db){

  route.post('/login', login)
  route.post('/create', checkEmail, createNew)

  function login(req, res, next){
    res.json({login: true, user: req.body.email})
  }

  function checkEmail(req, res, next){
    db.findEntryByField('users', 'email', req.body.email, (err, response) => {
      if(err){
        console.error(err)
      }else{
        if(response.length){
          res.json({register: false, error: 'Email address already in use'})
        }else{
          next()
        }
      }
    })
  }

  function createNew(req, res, next){
    const { email, password, location } = req.body
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (error, hash) => {
        db.createNewUser({ email, hash, location }, (userError, response) => {
          if(userError){
            console.error(userError)
          }else{
            res.json({register: true, user: response})
          }
        })
      })
    })
  }

  return route
}
