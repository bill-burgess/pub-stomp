const React = require('react')
const { DateField, Calendar } = require('react-date-picker')
import 'react-date-picker/index.css'

class DateToggle extends React.Component{
  render(){

    const onChange = (dateString, { dateMoment, timestamp }) => {
      console.log(dateString)
    }

    let date = '2017-04-24'

    return (
      <div className='toggleDate'>
        <Calendar
          dateFormat="YYYY-MM-DD"
          date={date}
          onChange={onChange}
        />
      </div>
    )
  }
}

module.exports = DateToggle
