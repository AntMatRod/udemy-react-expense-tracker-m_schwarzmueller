import './addNewExpense.css'

function AddNewExpense(props) {
  // call lifting-up function to change state in parent component
  const onClickHandler = () => {
    props.onShowExpenseForm()
  }

  return (
    <div>
      <button onClick={onClickHandler}>Add New Expense</button>
    </div>
  )
}

export default AddNewExpense
