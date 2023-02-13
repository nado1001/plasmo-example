import { useState } from "react"

function IndexNewtab() {
  const [data, setData] = useState("")

  return (
    <div>
      <h1>This is the New Tab Page!</h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
    </div>
  )
}

export default IndexNewtab
