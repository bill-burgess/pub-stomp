const React = require('react')
const request = require('superagent')

class LoginForm extends React.Component{

  handleSubmit(){

    const { dispatch, router } = this.props

    const email = this.refs.email.value
    const password = this.refs.password.value

    request.post('api/v1/users/login')
      .send({ email, password })
      .end((err, res) => {
        if(err){
          console.log('whoops!', err)
        }else{
          if(res.body.login){
            dispatch({type: 'LOGIN', payload: res.body.user})
            router.push('/events')
          }
        }
      })

  }

  render(){
    return (
      <div>
        <form>
          <div>
            <input className='formEntry' type='text' ref='email' placeholder='Email' /><br />
            <input className='formEntry' type='password' ref='password' placeholder='Password' />
          </div>
        </form>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

module.exports = LoginForm
