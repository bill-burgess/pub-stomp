const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const MatchesDisplaying = require('../components/matches-displaying')
const Filters = require('../components/filters')

class Events extends React.Component {

  render(){
    const { matches, dispatch, router, filters } = this.props
    return (
      <div>
        <Filters dispatch={dispatch} filters={filters} />
        <MatchesDisplaying matches={matches} dispatch={dispatch} router={router} filters={filters} />
      </div>
    )
  }
}

module.exports = connect((state) => state)(Events)
