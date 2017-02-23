const React = require('react')
const { DateField, MonthView } = require('react-date-picker')
import 'react-date-picker/index.css'

class DateToggle extends React.Component{
  render(){
    const { dispatch, filters } = this.props
    const onChange = (dateString, { dateMoment, timestamp }) => {
      dispatch({type: 'DATE_SELECT', payload: dateString})
    }

    const defaultRange = filters.date[0]
      ? [filters.date[0], filters.date[1]]
      : []

    return (
      <div className='toggleDate'>
        <MonthView
          weekNumbers={false}
          locale="en"
          weekStartDay={1}
          footer={false}
          onActiveDateChange={onChange}
          defaultRange={defaultRange}
          highlightRangeOnMouseMove={true}
        />
      </div>
    )
  }
}

module.exports = DateToggle
