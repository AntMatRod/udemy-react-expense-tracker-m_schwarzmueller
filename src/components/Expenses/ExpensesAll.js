import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from '../NewExpense/ExpensesChart'
import './ExpensesAll.css'

/**
 * This component wraps the individual expenses items
 * It sends to the child component the default and selected
 * year by the user, which is initially first send from the
 * child component. The selected year is managed via state vars.
 * In this pattern the parent component manages the state for the
 * child component.
 */

function ExpensesAll(props) {
  // defined in this component the default year
  const [filteredYear, setFilteredYear] = useState('2021')

  /**
   * lifting state up function that will be sent to child
   * the received selected year in drop down will be used for
   * filtering expense items. It will be sent back to child
   * component to display it in UI
   */
  const changeYear = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  // filter expenses based on selected year
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  // conditionally generate JSX snippets to use later in return section
  let expensesContent = (
    <p className="no-entries">No expenses for selected year</p>
  )

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expenses={expense} />
    ))
  }

  return (
    <Card className="expenses-main">
      <ExpensesFilter selectedYear={filteredYear} onChangeYear={changeYear} />

      <ExpensesChart expenses={filteredExpenses} />
      {/* iterate through list to show items filtered by selected year*/}
      {expensesContent}
    </Card>
  )
}

export default ExpensesAll

/** TEST
  // filter incoming array of objects via props by year selected (filteredYear)
  // new arr
  const filteredExpenses = []

  // test
  const testArr = (expenses) => {
    expenses.map((expense) => {
      if (expense.date.getFullYear() == filteredYear) {
        filteredExpenses.push(expense)
      }
    })
  }
  testArr(props.expenses)
  */

/**
   * ALTERNATIVE METHOD
   * 
   * The issue is that it would included too much logic in JSX
   * this should be ommited
   * 
   * 
   {props.expenses.map((expense) => {
    if (expense.date.getFullYear().toString() === filteredYear) {
      return <ExpenseItem key={expense.id} expenses={expense} />
    }
  })}
   * 
   */
