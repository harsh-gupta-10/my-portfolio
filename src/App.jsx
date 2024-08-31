import { useState } from 'react'
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
      <h1 className="text-3xl font-bold  ">
      Hello world!
    </h1>
    </>
  )
}

export default App
