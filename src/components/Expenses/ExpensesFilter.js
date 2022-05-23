import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
  /**
   * This component monitors onChange of filter containing years
   * and sends the select year to the parent component where the state
   * is managed further. The parent component sets the default value.
   * The parent component returns the user selected year to this child
   * component and set the value under value property of the build-in
   * select element
   */

  // change year onChange handler
  const changeYearHandler = (event) => {
    // call lift up function defined in parent component
    props.onChangeYear(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={changeYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
