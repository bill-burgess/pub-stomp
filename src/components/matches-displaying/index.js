const React = require('react')
const request = require('superagent')
const Loader = require('halogen/RingLoader')

const filterMatches = require('./filter-matches')

class MatchesDisplaying extends React.Component {

  componentDidMount(){
    const { dispatch } = this.props
    request.get('api/v1/matches', (err, res) => {
      if(err) console.error('err', err)
      if(!res.body.ok){
        console.log(res.body.error)
        return
      }
      dispatch({type: 'UPDATE_MATCHES', payload: res.body.matches})
    })
  }

  render(){
    const { matches, dispatch, router, filters } = this.props

    function displayMatches(matches, filters){
      const displayingMatches = filterMatches(matches, filters)
      const matchesShowing = displayingMatches.map(match => {
        const { tournament, id, team1, team2, date } = match
        return (
          <div key={id}>
          <p>{tournament}</p>
          <span>{team1.name} VS {team2.name}</span>
          <p>{date}</p><br />
          </div>
        )
      })
      const display = matches.length
        ? matchesShowing
        : <Loader color="blue" />
      return display
    }

    return (
      <div>
      {displayMatches(matches, filters)}
      </div>
    )
  }
}

module.exports = MatchesDisplaying
