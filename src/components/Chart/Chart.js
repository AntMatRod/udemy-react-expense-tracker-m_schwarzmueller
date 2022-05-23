import ChartBar from './ChartBar'
import './Chart.css'

/**
 * component receives data points to be displayed
 * as chart. In this component the datapoints can be filtered.
 *
 */
function Chart(props) {
  // create list with dataponts to be displayed on chart
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value)
  // calculate the max value in array of datapoints to set maximum value for chart
  const totalMaximum = Math.max(...dataPointsValues)

  return (
    <div className="chart">
      {/* call CharBar component for every monthly dataopint
        pass on also the calculated max value to scale chart */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // label should be unique
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
