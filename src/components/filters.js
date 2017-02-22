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

    const styles = {
      block: {
        maxWidth: 250,
      },
      toggle: {
        marginBottom: 16,
      },
      thumbOff: {
        backgroundColor: '#ffcccc',
      },
      trackOff: {
        backgroundColor: '#ff9d9d',
      },
      thumbSwitched: {
        backgroundColor: 'red',
      },
      trackSwitched: {
        backgroundColor: '#ff9d9d',
      },
      labelStyle: {
        color: 'red',
      },
    };

    return (
      <div>
        <div className='toggleSports'>
          <h3>Sports</h3>
          <Toggle
            label="Dota 2"
            labelPosition="right"
            defaultToggled={filters.sports.dota2}
            style={styles.toggle}
            onToggle={() => dispatch({type: 'TOGGLE_SPORT', payload: 'dota2'})}
          />
        </div>
      </div>
    )
  }
}

module.exports = Filters



// const dota2Img = 'http://vignette3.wikia.nocookie.net/defenseoftheancients/images/6/64/Dota_2_Logo_only.png/revision/latest?cb=20110914005751'
