import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './ExpensesAll.css'

function ExpensesAll(props) {
  return (
    <Card className="expenses-main">
      <ExpenseItem expenses={props} />
    </Card>
  )
}

export default ExpensesAll
