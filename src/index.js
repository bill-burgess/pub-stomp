const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const { Provider } = require('react-redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { MuiThemeProvider } = require('material-ui/styles')

const reducer = require('./reducer')
const initialState = require('../state')
// components
const App = require('./containers/app')
const Login = require('./containers/login')
const Events = require('./containers/events')
// actions
// plain object {type: string, payload: Object | string | number}

// model -> state

// reducer (state, action) :: -> state
// const initialState = 0

const store = createStore(reducer, initialState)

const Root = ({store}) => {
  return (
    <MuiThemeProvider>
      <Provider store={store} >
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Login} />
            <Route path='/events' component={Events} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}

// store .dispatch(action)
// reducer -> state
// store.subscribe

// store .getState -> state
console.log('store', store)
console.log('state', store.getState())

document.addEventListener('DOMContentLoaded', () => {
  store.subscribe(() => {
    const state = store.getState()
    console.log('state', state)
    render(state)
  })

  function render (state) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <Root store={store} />,
      root
    )
  }

  render(store.getState())
})
