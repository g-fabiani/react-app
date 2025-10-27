import Circle from "./Circle"
import Label from "./Label"

export default function LangCircle(props) {

  const minRadius = 22
  const labelHeight = 40

  function handleMouseEnter() {
    if (props.lang.depth === 3) {
      props.setHover(props.lang)
    }
  }


  return (
    <g
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => props.setHover(false)}
      className={`pack-circle pack-circle-depth-${props.lang.depth}`}
    >
      <Circle
        cx={props.lang.x}
        cy={props.lang.y}
        r={props.lang.r}
        fill={props.setFillColor(props.lang)}
        stroke={props.setStrokeColor(props.lang)}
      />
      {(props.lang.r >= minRadius && props.lang.depth === 3) && (
        <Label
          width={2 * props.lang.r}
          height={labelHeight}
          x={props.lang.x - props.lang.r}
          y={props.lang.y - labelHeight / 2}
          label={props.lang.data.name}
        />
      )}
    </g>
  )
}