const React = require('react')
const _ = require('lodash')

const MatchesDisplaying = (props) => {
  const { matches, dispatch, router, filters } = props
  console.log(new Date());

  function filterMatches(matches, filters){
    const { sports, dateBefore, dateAfter } = filters
    let filteredMatches = matches.filter(match => {
      return sports.find(sport => {
        return sport === match.sport
      })
    })
    return filteredMatches
  }

  function displayMatches(matches, filters){
    const displayingMatches = filterMatches(matches, filters)
    return displayingMatches.map(match => {
      const { tournament, id, team1, team2, date } = match
      return (
        <div key={id}>
          <p>{tournament}</p>
          <span>{team1.name} VS {team2.name}</span>
          <p>{date}</p><br />
        </div>
      )
    })
  }

  return (
    <div>
      {displayMatches(matches, filters)}
    </div>
  )
}

module.exports = MatchesDisplaying
