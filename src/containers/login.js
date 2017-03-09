const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

class Login extends React.Component {

  componentWillMount(){
    const { router, loggedIn } = this.props
    if(loggedIn){
      router.push('/events')
    }
  }

  showSignUp(){
    const { dispatch } = this.props
    dispatch({type: 'SHOW_COMPONENT', payload: 'signUp'})
  }

  showLogin(){
    const { dispatch } = this.props
    dispatch({type: 'SHOW_COMPONENT', payload: 'login'})
  }

  render() {
    const { conditionalComponents } = this.props

    return (
      <div>
        <button onClick={this.showSignUp.bind(this)}>Sign Up</button>
        <button onClick={this.showLogin.bind(this)}>Login</button>
      </div>
    )
  }
}

module.exports = connect((state) => state)(Login)
