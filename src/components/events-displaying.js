const React = require('react')
const _ = require('lodash')

const EventsDisplaying = (props) => {
  const { events, dispatch, router } = props

  function filterEvents(events, filters){
    return events
  }

  function displayEvents(events, filters){
    const displayingEvents = filterEvents(events, filters)
    return _.map(displayingEvents, event => {
      const { name, id } = event
      return (
        <div key={id}>
          {name}
        </div>
      )
    })
  }

  return (
    <div>
      {displayEvents(events, null)}
    </div>
  )
}

module.exports = EventsDisplaying
