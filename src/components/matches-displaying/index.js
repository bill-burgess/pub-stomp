const React = require('react')
const request = require('superagent')

const filterMatches = require('./filter-matches')

class MatchesDisplaying extends React.Component {

  componentDidMount(){
    request.get('api/v1/matches', (err, res) => {
      if(err) console.error(err)
      console.log('Got the things!', res)
    })
  }

  render(){
    const { matches, dispatch, router, filters } = this.props

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
}

module.exports = MatchesDisplaying
