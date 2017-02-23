const React = require('react')

const sportsToggle = require('./sports-toggle')
const DateToggle = require('./date-toggle')

class Filters extends React.Component {

  render(){
    const { dispatch, filters } = this.props

    return (
      <div>
        <div className='toggleSports'>
          <h3>Sports</h3>
          {sportsToggle(dispatch, filters)}
        </div>
        <DateToggle dispatch={dispatch} filters={filters} />
      </div>
    )
  }
}

module.exports = Filters



// const dota2Img = 'http://vignette3.wikia.nocookie.net/defenseoftheancients/images/6/64/Dota_2_Logo_only.png/revision/latest?cb=20110914005751'
