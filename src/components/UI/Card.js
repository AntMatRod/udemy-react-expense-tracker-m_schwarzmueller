import './Card.css'

function Card(props) {
  //   const classes = 'card ' + props.className
  const classes = `card ${props.className}`

  return <div className={classes}>{props.children}</div>
}

export default Card

/** aem7
 * props.children is a build-in prop to place children components inside a wrapper component
 * children is a reserved name by react
 * the value is the content between the wrapper component
 *
 * Via props.className the Card component gets all classes
 * that are passed to it in the target component where Card is used
 */
