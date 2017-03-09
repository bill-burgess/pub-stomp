const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const LoginForm = require('../components/login-form')
const SignUpForm = require('../components/sign-up-form')

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
    const { signUp, login } = conditionalComponents
    const formShowing = signUp
      ? <SignUpForm />
      : <LoginForm />
    const display = (login || signUp)
    ? formShowing
    : (
      <div>
      <button onClick={this.showSignUp.bind(this)}>Sign Up</button>
      <button onClick={this.showLogin.bind(this)}>Login</button>
      </div>
    )
    console.log('display', display)
    return display
  }
}

module.exports = connect((state) => state)(Login)
