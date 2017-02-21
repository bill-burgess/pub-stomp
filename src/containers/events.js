const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

class Events extends React.Component {

  render(){
    return (
      <div>
        hello events
      </div>
    )
  }
}

module.exports = connect((state) => state)(Events)
