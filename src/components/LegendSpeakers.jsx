import ChartContainer from "./ChartContainer"
import Circle from "./Circle"
import { format } from "d3-format"

export default function LegendSpeakers(props) {
  const width = 260
  const height = 200
  const margin = {
    top: 10,
    left: 1,
    bottom: 1,
    right: 1
  }

  const innerWidht = width - margin.left - margin.right

  const minSpeakers = 10_000_000
  const mediumSpeakers = 100_000_000
  const maxSpeakers = 1_000_000_000

  const maxRadius = props.getRadius(maxSpeakers)
  const mediumRadius = props.getRadius(mediumSpeakers)
  const minRadius = props.getRadius(minSpeakers)

  const formatNumbers = format('.2s')

  return (
    <div id="legend-speakers">
      <ChartContainer
        width={width}
        height={height}
        margin={margin}
      >
        <Circle
          cx={maxRadius}
          cy={maxRadius}
          r={maxRadius}
          fill='none'
          stroke='#272626'
        />
        <Circle
          cx={maxRadius}
          cy={2 * maxRadius - mediumRadius}
          r={props.getRadius(mediumSpeakers)}
          fill='none'
          stroke='#272626'
        />
        <Circle
          cx={maxRadius}
          cy={2 * maxRadius - minRadius}
          r={minRadius}
          fill='none'
          stroke='#272626'
        />
        <g stroke="#272626" strokeDasharray="6 4">
          <line
            x1={maxRadius}
            y1={0}
            x2={innerWidht - 60}
            y2={0}
          />
          <line
            x1={maxRadius}
            y1={2 * maxRadius - 2 * mediumRadius}
            x2={innerWidht - 60}
            y2={2 * maxRadius - 2 * mediumRadius}
          />
          <line
            x1={maxRadius}
            y1={2 * maxRadius - 2 * minRadius}
            x2={innerWidht - 60}
            y2={2 * maxRadius - 2 * minRadius}
          />
        </g>
        <g fill="#272626" dominantBaseline="middle">
          <text
            x={innerWidht - 60}
            y={2 * maxRadius - 2 * minRadius}
          >{formatNumbers(minSpeakers)}</text>
          <text
            x={innerWidht - 60}
            y={2 * maxRadius - 2 * mediumRadius}
          >{formatNumbers(mediumSpeakers)}</text>
          <text
            x={innerWidht - 60}
          >{formatNumbers(maxSpeakers)}</text>
        </g>
      </ChartContainer>
    </div>
  )
}