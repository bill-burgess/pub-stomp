const React = require('react')

class SignUpForm extends React.Component{

  handleSubmit(){
    console.log('clicked')
  }

  render(){

    let emailField = 'formEntry'
    let passwordField = 'formEntry'
    let passwordConfirmField = 'formEntry'

    function renderLocations(locations){
      return locations.map(location => {
        const { locationId, locationName } = location
        return <option key={locationId} value={locationId}>{locationName}</option>
      })
    }

      const locations = [
        {locationId: 1, locationName: 'Auckland'},
        {locationId: 2, locationName: 'Wellington'},
        {locationId: 3, locationName: 'Christchurch'},
      ]

    return (
      <div>
        <form>
          <div>
            <input className={emailField} type='text' ref='email' placeholder='Email' /><br />
            <input className={passwordField} type='password' ref='password' placeholder='Password' /><br />
            <input className={passwordConfirmField} type='password' ref='passwordConfirm' placeholder='Confirm Password' />
          </div>
        </form>
        <select ref='location'>
          <option value={null}>Choose Home Location</option>
          {renderLocations(locations)}
        </select><br />
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

module.exports = SignUpForm
