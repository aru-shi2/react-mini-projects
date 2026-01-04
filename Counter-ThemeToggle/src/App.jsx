import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="div">
        <div>
          <div>{count}</div>
        <div className="btn">
          <button onClick={}>+</button>
        <button>-</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
