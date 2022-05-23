import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import AddNewExpense from './addNewExpense'

import './NewExpense.css'

function NewExpense(props) {
  //
  // init state to show
  const [showExpenseForm, setShowExpenseForm] = useState(true)

  /**  handle new expense data that is passed as argument by
   * child component when function is executed there when
   * submitting the form data
   */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // spread operator to save form data
      id: Math.round(10 ** 16 * Math.random().toString()), // add id to object, 10^16 to have integers by rounding result
    }
    // call function sent by parent
    props.onAddExpense(expenseData)
  }

  //
  const activateExpenseForm = () => {
    setShowExpenseForm(false)
  }

  const deactivateExpenseForm = () => {
    setShowExpenseForm(true)
  }

  /**
   * send handler function as a props to child component
   * where it will be executed when certain event is triggered
   */
  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <AddNewExpense onShowExpenseForm={activateExpenseForm} />
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onShowExpenseForm={deactivateExpenseForm}
        />
      )}
    </div>
  )
}

export default NewExpense
