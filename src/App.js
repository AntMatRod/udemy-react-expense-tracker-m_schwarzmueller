import { useState } from 'react'

import ExpensesAll from './components/Expenses/ExpensesAll'
import NewExpense from './components/NewExpense/NewExpense'

// aem7
function App() {
  // dummy data
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  // init expenses with dummy data
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // send data from child to parent by passing
  // handler function to child and executing it there
  // add new expense to existing dummy data expense using the prevState
  // pattern in arrow function
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <div className="expenses">
        <ExpensesAll expenses={expenses} />
      </div>
    </div>
  )
}

export default App
