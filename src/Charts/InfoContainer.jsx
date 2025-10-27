import { format } from "d3-format"

export default function InfoContainer({ hover }) {
  const formatNumber = format('.3s')

  return (
    <div id="info-container">
      {hover ? (
        <div id="info">
          <div className="info-language">{hover.data.name}</div>
          <div className="info-branch">
            Branch: {hover.parent.data.name}
          </div>
          <div className="info-family">
            Family: {hover.parent.parent.data.name}
          </div>
          <div className="info-total-speakers">
            Total speakers: {formatNumber(hover.data.total_speakers)}
          </div>
          <div className="info-native-speakers">
            Native speakers: {formatNumber(hover.data.native_speakers)}
          </div>
        </div>
      ) : (
        <div id="instructions">Pass your mouse over a language to reveal additional information.</div>
      )}

    </div>
  )
}