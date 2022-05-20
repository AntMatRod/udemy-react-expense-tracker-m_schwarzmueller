import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
  return (
    <div>
      <ExpenseItem expenses={props}></ExpenseItem>
    </div>
  )
}

export default Expenses
