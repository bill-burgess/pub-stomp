const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const MatchesDisplaying = require('../components/matches-displaying')

class Events extends React.Component {

  render(){
    const { matches, dispatch, router } = this.props
    return (
      <div>
        <MatchesDisplaying matches={matches} dispatch={dispatch} router={router} />
      </div>
    )
  }
}

module.exports = connect((state) => state)(Events)
