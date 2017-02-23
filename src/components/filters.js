const React = require('react')
import Toggle from 'material-ui/Toggle';

class Filters extends React.Component {

  handleToggle(){
    const { dispatch } = this.props
    console.log(this.refs);
    // const sport = this.refs.value
    console.log('clicked it');
  }

  render(){
    const { dispatch, filters } = this.props

    const sports = [
      {name: 'Dota 2', value: 'dota2'},
      {name: 'StarCraft 2', value: 'starCraft2'},
      {name: 'Hearthstone', value: 'hearthstone'}
    ]

    const styles = {
      toggle: {
        marginBottom: 16,
      }
    }

    function displaySportsToggles(sports){
      return sports.map(sport => {
        return (
          <Toggle
            label={sport.name}
            labelPosition="right"
            defaultToggled={filters.sports[sport.value]}
            style={styles.toggle}
            onToggle={() => dispatch({type: 'TOGGLE_SPORT', payload: sport.value})}
          />
        )
      })
    }

    return (
      <div>
        <div className='toggleSports'>
          <h3>Sports</h3>
          {displaySportsToggles(sports)}
        </div>
      </div>
    )
  }
}

module.exports = Filters



// const dota2Img = 'http://vignette3.wikia.nocookie.net/defenseoftheancients/images/6/64/Dota_2_Logo_only.png/revision/latest?cb=20110914005751'
