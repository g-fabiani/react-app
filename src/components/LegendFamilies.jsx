export default function LegendFamilies({ data }) {
  return (
    <div id="legend-families">
      <ul>
        {data.map(family =>
          <li key={`legend-${family.label}`}>
            <span className="legend-color"
              style={{ backgroundColor: family.color }}
            ></span>
            <span className="legend-label">{family.label}</span>
          </li>
        )}
      </ul>
    </div>
  )
}