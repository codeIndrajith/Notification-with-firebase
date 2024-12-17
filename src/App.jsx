import React, { useEffect } from "react"
import { generateToken , messaging} from "./config/firebase"
import { onMessage } from "firebase/messaging";

function App() {
  useEffect(() => {
    generateToken();
    console.log("hello")
    onMessage(messaging, (payload) => {
      console.log(payload)
    })
  },[])

  return (
    <div>
     <h1>Hello notification react app</h1>
    </div>
  )
}

export default App
