export default function Circle(props) {
  return (
    <circle
      cx={props.cx}
      cy={props.cy}
      r={props.r}
      fill={props.fill}
      fillOpacity={props.fillOpacity ? props.fillOpacity : 1}
      stroke={props.stroke ? props.stroke : 'none'}
    />
  )
}