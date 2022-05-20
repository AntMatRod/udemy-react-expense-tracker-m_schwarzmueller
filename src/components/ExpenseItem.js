import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

// aem7
function ExpenseItem({ expenses }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={expenses.date} />
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <div className="expense-item__price">${expenses.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem

/** aem7
 *
 * props is an object that contains all data passed by parent component
 * as key:value pairs.
 *
 * toLocaleString()
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 *
 */
