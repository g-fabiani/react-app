
import Circle from "./Circle"

export default function TreeNode(props) {
  return (
    <g>
      <Circle
        cx={props.node.y}
        cy={props.node.x}
        r={props.node.depth === 3 ?
          props.getRadius(props.node.data.total_speakers) :
          4}
        fill={props.node.depth === 3 ?
          props.colorScale(props.node.parent.parent.data.name) :
          'white'}
        fillOpacity={props.node.depth === 3 ? .3 : 1}
        stroke={props.node.depth === 3 ? 'none' : 'gray'}
      />
      <text
        className="label-tree"
        x={props.node.depth === 3 ? props.node.y + 8 : props.node.y - 8}
        y={props.node.x}
        textAnchor={props.node.depth === 3 ? 'start' : 'end'}
        dominantBaseline="middle"
        paintOrder={'stroke'}
        stroke={props.node.depth === 3 ? 'none' : 'white'}
        strokeWidth={2}
        style={{ fontSize: '16px' }}
      >{props.node.data.name}</text>
    </g>
  )
}