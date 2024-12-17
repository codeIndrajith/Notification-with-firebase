import React, { useEffect } from "react"
import { generateToken } from "./config/firebase"

function App() {
  useEffect(() => {
    generateToken();
  },[])

  return (
    <div>
     <h1>Hello notification react app</h1>
    </div>
  )
}

export default App
