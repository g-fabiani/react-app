import ChartContainer from "./ChartContainer"
import { pack } from "d3-hierarchy"
import { interpolate } from "d3-interpolate"
import LangCircle from "./LangCircle"

export default function CirclePack(props) {

  const width = 800
  const height = 800
  const margin = {
    top: 1,
    bottom: 1,
    left: 1,
    right: 1
  }
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const [root, descendants, leaves] = props.data
  root.sum(d => d.total_speakers)

  const packLayoutGenerator = pack()
    .size([innerWidth, innerHeight])
    .padding(3)

  packLayoutGenerator(root)


  function setFillColor(d) {
    switch (d.depth) {
      case 1:
        return props.colorScale(d.data.name)
      case 2:
        return interpolate(props.colorScale(d.parent.data.name), 'white')(0.5)
      default:
        return 'white'
    }
  }

  function setStrokeColor(d) {
    switch (d.depth) {
      case 0:
        return 'gray'
      case 3:
        return interpolate(props.colorScale(d.parent.parent.data.name), 'black')(0.2)
      default:
        return 'none'
    }
  }

  return (
    <ChartContainer
      height={height}
      width={width}
      margin={margin}
    >
      {descendants.map(d => (
        <LangCircle
          key={d.data.name}
          lang={d}
          setFillColor={setFillColor}
          setStrokeColor={setStrokeColor}
          setHover={props.setHover}
        />
      ))}
    </ChartContainer>
  )
}