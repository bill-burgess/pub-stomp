const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const EventsDisplaying = require('../components/events-displaying')

class Events extends React.Component {

  render(){
    const { displayedEvents, dispatch, router } = this.props
    return (
      <div>
        <EventsDisplaying displayedEvents={displayedEvents} dispatch={dispatch} router={router} />
      </div>
    )
  }
}

module.exports = connect((state) => state)(Events)
