import { useState,useEffect } from 'react'
import './App.css'
import {v4 as uuidv4} from 'uuid';

function App() {
  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])

  useEffect(() => {
      const oldtodo=JSON.parse(localStorage.getItem('todos'))||[]
    setTodos(oldtodo)
    }, [])

  const Add=() => {
    const t={id:uuidv4(),todo:Todo}
    const oldtodo=JSON.parse(localStorage.getItem('todos'))||[]
    const alltodo=[...oldtodo,t]
    setTodos(alltodo)
    localStorage.setItem('todos',JSON.stringify(alltodo))  
    setTodo("")
  }
  
  const Edit=() => {
    sdgv
  }
  
  const Delete=(id) => {
    const ts=Todos.filter(n=>n.id!=id)
    setTodos(ts)
    localStorage.setItem('todos',JSON.stringify(ts))  
    setTodo("")
  }
  

  return (
    <>
      <div className="box">
        <div className="content">
          <div className="main">
            <h1>Todo App</h1>
            <div className="input">
              <input onChange={(e)=>setTodo(e.target.value)} value={Todo} type="text" placeholder='Enter Todo...' />
              <button onClick={Add}>Add</button>
            </div>
            <ul className="todos">
              {Todos.map((item)=>(
                <li key={item.id}>{item.todo}
                <button onClick={Edit}>Edit</button>
                <button onClick={()=>Delete(item.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
