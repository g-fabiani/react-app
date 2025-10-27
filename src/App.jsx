import Frontmatter from "./Page/Frontmatter"
import Charts from "./Charts/Charts"
import Sources from "./Page/Sources"
import { useEffect, useState } from "react"
import { json } from "d3-fetch"
import { hierarchy } from "d3-hierarchy"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const dataUrl = "./data/data.json";
    json(dataUrl).then(data => {
      const root = hierarchy(data)
      const descendants = root.descendants()
      const leaves = root.leaves()

      setData([root, descendants, leaves])
    })
  }, [])


  return (
    <div className='container'>
      <Frontmatter />
      {data.length === 0 ? (
        <div className="loading">loading...</div>
      ) : <Charts data={data} />}

      <Sources />
    </div>
  )
}

export default App
