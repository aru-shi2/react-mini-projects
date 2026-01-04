import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Theme, setTheme] = useState("Light")

  const handleIncrease=() => {
    setCount(c=>c+1)
  }
  const handleDecrease=() => {
    setCount(c=>c-1)
  }
  const handleReset=() => {
    setCount(0)
  }
  
  const toggle=() => {
    if(Theme=="Light"){
      setTheme("Dark")
    }
    else{
      setTheme("Light")
    }
  }
  
  
  return (
    <>
      <div className={Theme=="Light"?"themelight":"themedark"}>
        <div className="div">
        <div>
          <div>{count}</div>
        <div className="btn">
          <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        </div>
        <div className="btn2">
          <button onClick={handleReset}>Reset</button>
        </div>
        </div> 
        <button className='toggle' onClick={toggle}>{Theme}</button>  
      </div>
        </div>
    </>
  )
}

export default App
