import React, { useEffect } from "react"
import { generateToken , messaging} from "./config/firebase"
import toast, { Toaster } from 'react-hot-toast';
import { onMessage } from "firebase/messaging";

function App() {
  useEffect(() => {
    generateToken();
    console.log("hello")
    onMessage(messaging, (payload) => {
      console.log(payload)
      toast(payload.notification.body)
    })
  },[])

  return (
    <div>
     <h1>Hello notification react app</h1>
     <Toaster position="top-center"
              reverseOrder={false}/>
    </div>
  )
}

export default App
