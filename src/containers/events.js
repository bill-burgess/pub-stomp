const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const MatchesDisplaying = require('../components/matches-displaying')

class Events extends React.Component {

  render(){
    const { matches, dispatch, router, filters } = this.props
    return (
      <div>
        <MatchesDisplaying matches={matches} dispatch={dispatch} router={router} filters={filters} />
      </div>
    )
  }
}

module.exports = connect((state) => state)(Events)
