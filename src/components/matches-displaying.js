const React = require('react')
const _ = require('lodash')

const MatchesDisplaying = (props) => {
  const { matches, dispatch, router, filters } = props

  function monthToValue(monthStr){
    switch (monthStr) {
      case 'Jan':
        return 1

      case 'Feb':
        return 2

      case 'Mar':
        return 3

      case 'Apr':
        return 4

      case 'May':
        return 5

      case 'Jun':
        return 6

      case 'Jul':
        return 7

      case 'Aug':
        return 8

      case 'Sep':
        return 9

      case 'Oct':
        return 10

      case 'Nov':
        return 11

      case 'Dec':
        return 12

      default:
        return 'halp'
    }
  }

  function filterMatches(matches, filters){
    const { sports, dateBefore, dateAfter } = filters
    let filteredMatches = matches.filter(match => {
      if(!sports.length){
        return true
      }
      return sports.find(sport => {
        return sport === match.sport
      })
    })
    filteredMatches = filteredMatches.filter(match => {
      if(!dateBefore){
        return true
      }
      const splitDateBefore = dateBefore.split(' ')
      const splitDateMatch = match.date.split(' ')
      if(Number(splitDateBefore[3]) < Number(splitDateMatch[3])){
        return false
      }
      if(monthToValue(splitDateBefore[1]) < monthToValue(splitDateMatch[1])){
        return false
      }
      if(Number(splitDateBefore[2]) < Number(splitDateMatch[2])){
        return false
      }
      return true
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
