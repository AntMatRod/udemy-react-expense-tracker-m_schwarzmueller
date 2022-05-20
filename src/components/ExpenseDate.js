import './ExpenseDate.css'

// aem7
function ExpenseDate({ date }) {
  // by passing the props from parent component like  {date} the
  // date can be accessed directly without props.date
  const month = date.toLocaleString('en-US', { month: 'long' })
  const year = date.toLocaleString('en-US', { year: 'numeric' })
  const day = date.toLocaleString('en-US', { day: 'numeric' })

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}

export default ExpenseDate

/**
 * 
 * it is considered best practice to not included too much code
 * in JSX code. Better is it to work with variables

  //   const month = props.date.toLocaleString('en-US', { month: 'long' })
  //   const year = props.date.toLocaleString('en-US', { year: 'numeric' })
  //   const day = props.date.toLocaleString('en-US', { day: 'numeric' })

 */
