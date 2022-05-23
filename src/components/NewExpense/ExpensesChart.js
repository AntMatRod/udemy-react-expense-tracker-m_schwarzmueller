import Chart from '../Chart/Chart'

/**
 *
 * Manage here the chart data structure for expense items
 * by creating object with chart label and chart values
 *
 *
 */
function ExpensesChart(props) {
  /**
   * Initialise data object for
   * chart
   */
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]

  // aggregate expenses by month (for selected year)
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth()
    chartDataPoints[expenseMonth].value += expense.amount
  }

  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart

/** aem7
 *
 * Use:
 * for of in case of array
 * for in in case of object
 *
 */
