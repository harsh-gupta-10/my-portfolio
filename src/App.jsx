import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      </div>
      <h1>Hello i am Harsh Gupta</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          And
        </p>
        <br/>
        <p>
          And i am Learning Vite + React 
        </p>
      </div>
      <p className="read-the-docs">
        Currently i am pursing BscIT from Chetana College and i am in 3rd year
      </p>
    </>
  )
}

export default App
