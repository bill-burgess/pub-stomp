const React = require('react')
const { DateField, MonthView } = require('react-date-picker')
import 'react-date-picker/index.css'

class DateToggle extends React.Component{
  render(){

    const onChange = (dateString, { dateMoment, timestamp }) => {
      dispatch({type: 'DATE_SELECT', payload: dateString})
    }

    let date = '2017-04-24'

    return (
      <div className='toggleDate'>
        <MonthView
          weekNumbers={false}
          locale="en"
          weekStartDay={1}
          footer={false}
          onActiveDateChange={onChange}
          defaultRange={[]}
          highlightRangeOnMouseMove={true}
        />
      </div>
    )
  }
}

module.exports = DateToggle
//new Date(give date).getTime() => return millisecs since 1 jan 1970
