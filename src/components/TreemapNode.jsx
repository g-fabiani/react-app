import { useLayoutEffect, useRef, useState } from "react"

export default function TreemapNode(props) {
  const [hidden, setHidden] = useState(false)
  const labelRef = useRef(null)

  useLayoutEffect(() => {
    const { width } = labelRef.current.getBoundingClientRect()
    setHidden((props.height < 25)
      || (props.width < width + 10)
    )
  }, [])

  return (
    <g className="treemap-node-container"
      transform={`translate(${props.x}, ${props.y})`}
    >
      <rect
        className={`treemap-node`}
        width={props.width}
        height={props.height}
        stroke="none"
        rx={3}
        ry={3}
        fill={props.fill}
      />
      <text
        x={5}
        y={15}
        className="treemap-label"
        fill="white"
        ref={labelRef}
        fillOpacity={hidden ? 0 : 1}
      >{props.label}</text>
    </g>
  )
}