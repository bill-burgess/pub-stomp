const React = require('react')
import Toggle from 'material-ui/Toggle';


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

module.exports = (dispatch, filters) => {
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
