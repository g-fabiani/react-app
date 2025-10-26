import { useState } from "react"
import InfoContainer from "./InfoContainer"
import CirclePack from "./CirclePack"
import TreeChart from "./TreeChart"
import Treemap from "./Treemap"
import { languageFamilies } from "../utils/constants"
import { scaleOrdinal, scaleRadial } from "d3-scale"
import LegendFamilies from "./LegendFamilies"
import LegendSpeakers from "./LegendSpeakers"
import { max } from "d3-array"

export default function Charts({ data }) {
  const [hover, setHover] = useState(false)
  const [root, descendants, leaves] = data

  const colorScale = scaleOrdinal()
    .domain(languageFamilies.map(d => d.label))
    .range(languageFamilies.map(d => d.color))

  const maxSpeakers = max(leaves, d => d.data.total_speakers)
  const getRadius = scaleRadial()
    .domain([0, maxSpeakers])
    .range([0, 83])

  return (
    <>
      <section>
        <h2>Circle Pack Chart</h2>
        <div className="legend">
          <div className="row">
            <div className="col col-6">
              <h3>Language families</h3>
              <LegendFamilies data={languageFamilies} />
            </div>
            <div className="col col-4">
              <h3>Total number of speakers</h3>
              <LegendSpeakers
                getRadius={getRadius}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col col-9">
              <CirclePack
                data={data}
                setHover={setHover}
                colorScale={colorScale}
              />
            </div>
            <div className="col col-3">
              <InfoContainer hover={hover} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Tree Chart</h2>
        <TreeChart
          data={data}
          colorScale={colorScale}
          getRadius={getRadius}
        />
      </section>
      <section>
        <h2>Treemap</h2>
        <Treemap
          data={data}
          colorScale={colorScale}
        />
      </section>
    </>
  )
}