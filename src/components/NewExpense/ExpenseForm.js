import { useState } from 'react'
import './ExpenseForm.css'

// aem7
function ExpenseForm(props) {
  /* state vars
   * method 1: individual states */
  //   const [enteredTitle, setEnteredTitle] = useState('')
  //   const [enteredAmount, setEnteredAmount] = useState('')
  //   const [enteredDate, setEnteredDate] = useState('')

  /* method 2: one state for whole form
   * the userInput is an object with key:value pairs */
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  // event handlers: method 1
  //   const titleChangeHandler = (event) => {
  //     setEnteredTitle(event.target.value)
  //   }
  //   const amountChangeHandler = (event) => {
  //     setEnteredAmount(event.target.value)
  //   }
  //   const dateChangeHandler = (event) => {
  //     setEnteredDate(event.target.value)

  /* event handlers: method 2
   * requires to collect all states from other input
   * fields and add the particular state otherwise these get loose.
   *
   * since react schedules when it updates the state in a component,
   * when relying on the previous state the followin pattern must be used */
  const titleChangeHandler = (event) => {
    // THIS pattern will work most of time, but without guarantees
    // that the used state ...userInput will contain correct latest state:
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,

    // THIS pattern works always as react guarantees that the prevState
    // is the lattet state, by using the following arrow function
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }
    })
  }

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value }
    })
  }
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value }
    })
  }

  // function to handle submit form event
  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    }

    // execute lift-up function sent by parent component
    props.onSaveExpenseData(expenseData)

    // reset form data after submitting form
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    })
    props.onShowExpenseForm()
  }

  //
  const onCancelHandler = () => {
    props.onShowExpenseForm()
  }

  /**
   * use two-way binding to set a value property
   * after submitting form data
   */
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="" onClick={onCancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
