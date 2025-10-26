export default function TreeLink(props) {
  return (
    <path
      className="tree-link"
      d={props.linkGenerator(props.link)}
      fill="none"
      stroke={props.stroke}
      strokeOpacity={props.strokeOpacity}
    />
  )
}