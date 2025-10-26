import ChartContainer from "./ChartContainer"
import TreeLink from "./TreeLink"
import TreeNode from "./TreeNode"
import { tree } from "d3-hierarchy"
import { link, curveBumpX } from "d3-shape"

export default function TreeChart(props) {
  const width = 1200
  const height = 3000
  const margin = {
    top: 60,
    right: 200,
    bottom: 0,
    left: 100
  }
  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.right - margin.left

  const [root, descendants, leaves] = props.data
  const treeLayoutGenerator = tree()
    .size([innerHeight, innerWidth]);

  treeLayoutGenerator(root)

  const linkGenerator = link(curveBumpX)
    .x(d => d.y)
    .y(d => d.x)

  return (
    <ChartContainer
      height={height}
      width={width}
      margin={margin}
    >
      {root.links().map(link => (
        <TreeLink
          key={`link-${link.source.data.name}-${link.target.data.name}`}
          linkGenerator={linkGenerator}
          link={link}
          stroke={'gray'}
          strokeOpacity={0.6}
        />
      ))}
      {descendants.map(d => (
        <TreeNode
          key={`node-${d.data.name}`}
          node={d}
          colorScale={props.colorScale}
          getRadius={props.getRadius}
        />
      ))}
    </ChartContainer>
  )
}