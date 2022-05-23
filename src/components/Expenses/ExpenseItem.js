import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

// aem7
function ExpenseItem({ expenses }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenses.date} />
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <div className="expense-item__price">${expenses.amount}</div>
      </div>
    </Card>
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

/**  CODE SNIPPETS
 * // define counter outside function due to state changes overwriting
// let cc = 0

  // let [counter, setCounter] = useState(0)


   // start using state
  const [title, setTitle] = useState(expenses.title)

  // add button event
  // const clickHandler = () => {
  //   setCounter(counter++)
  //   setTitle(`Titel has been changed ${counter} times!`)
  // }

         <button onClick={clickHandler}>Change Title</button> 

 */
