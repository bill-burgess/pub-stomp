const React = require('react')
const request = require('superagent')

const confirmEntryValid = require('./confirm-entry-valid.js')

class SignUpForm extends React.Component{

  handleSubmit(){
    const { dispatch, router } = this.props

    const email = this.refs.email.value
    const password = this.refs.password.value
    const passwordConfirm = this.refs.passwordConfirm.value
    const location = this.refs.location.value

    confirmEntryValid({ email, password, passwordConfirm, location }, res => {
      if(res.valid){
        request.post('api/v1/users/create')
        .send({ email, password, location })
        .end((err, res) => {
          if(err){
            console.log('whoops!', err)
          }else{
            if(res.body.register){
              dispatch({type: 'LOGIN', payload: res.body.user})
              router.push('/events')
            }else{
              console.log(res.body.error)
            }
          }
        })
      }else{
        console.log(res.dispatch)
      }
    })

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
      {locationId: 0, locationName: 'Auckland'},
      {locationId: 1, locationName: 'Wellington'},
      {locationId: 2, locationName: 'Christchurch'},
      {locationId: 3, locationName: 'Other'},
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
