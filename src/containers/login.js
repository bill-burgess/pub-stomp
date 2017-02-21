const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const Login = (props) => {
  return (
    <div>
      this is the login page
      <Link to='/events'>Events</Link>
    </div>
  )
}

module.exports = connect((state) => state)(Login)
