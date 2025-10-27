export default function Label(props) {
  return (
    <foreignObject
      className="leaf-label-container"
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
    >
      <div xmlns="http://www.w3.org/1999/xhtml" className="leaf-label">
        {props.label}
      </div>
    </foreignObject>
  )
}