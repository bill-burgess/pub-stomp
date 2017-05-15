const express = require('express')
const bcrypt = require('bcryptjs')
const route = express.Router()

module.exports = function(db){

  route.post('/login', login)
  route.post('/new', checkEmail, createNew)

  function login(req, res, next){
    db.findEntryByField('users', 'email', req.body.email, (err, response) => {
      if(err){
        console.error(err)
      }else{
        if(!response[0]){
          res.json({login: false, error: 'Invalid Email/password'})
        }else{
          const { email, hash, location, id } = response[0]
          bcrypt.compare(req.body.password, hash, (error, result) => {
            if(error){
              console.error(error)
            }else{
              if(result){
                res.json({login: true, user: { id, email, location }})
              }else{
                res.json({login: false, error: 'Invalid email/Password'})
              }
            }
          })
        }
      }
    })
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
