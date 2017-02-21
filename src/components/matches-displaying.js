const React = require('react')
const _ = require('lodash')

const MatchesDisplaying = (props) => {
  const { matches, dispatch, router } = props

  function filterMatches(matches, filters){
    return matches
  }

  function dateAsString(date){
    const dateElements = date.split('-')
    return `${dateElements[2]}-${dateElements[1]} @ ${dateElements[3]} : ${dateElements[4]}`
  }

  function displayMatches(matches, filters){
    const displayingMatches = filterMatches(matches, filters)
    return _.map(displayingMatches, match => {
      const { tournament, id, team1, team2, date } = match
      return (
        <div key={id}>
          <p>{tournament}</p>
          <span>{team1.name} VS {team2.name}</span>
          <p>{dateAsString(date)}</p><br />
        </div>
      )
    })
  }

  return (
    <div>
      {displayMatches(matches, null)}
    </div>
  )
}

module.exports = MatchesDisplaying
