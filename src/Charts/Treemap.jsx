import { treemap } from "d3-hierarchy"
import ChartContainer from "../ChartComponents/ChartContainer"
import TreemapNode from "../ChartComponents/TreemapNode"

export default function Treemap(props) {
  const width = 850
  const height = 600
  const margin = {
    top: 3,
    bottom: 3,
    left: 3,
    right: 3
  }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const [root, descendants, leaves] = props.data
  const treemapLayoutGenerator = treemap()
    .size([innerWidth, innerHeight])
    .paddingInner(1)
    .paddingOuter(1)
    .round(true)

  treemapLayoutGenerator(root)

  return (
    <div>
      <ChartContainer
        height={height}
        width={width}
        margin={margin}
      >
        {leaves.map(d => (
          <TreemapNode
            key={`treemap-node-${d.data.name}`}
            x={d.x0}
            y={d.y0}
            width={d.x1 - d.x0}
            height={d.y1 - d.y0}
            fill={props.colorScale(d.parent.parent.data.name)}
            label={d.data.name}
          />
        ))}

      </ChartContainer>
    </div>
  )
}