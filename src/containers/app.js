const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const App = (props) => {
  return (
    <div>
      hello world
    </div>
  )
}

module.exports = connect((state) => state)(App)
