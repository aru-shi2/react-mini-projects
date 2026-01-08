import { useState, useEffect } from 'react'
import './App.css'
import {v4 as uuidv4} from 'uuid';

function App() {
  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])
  const [edit, setedit] = useState(null)
  useEffect(() => {
      const data=localStorage.getItem('todos')
      if(data){
        setTodos(JSON.parse(data))
      }else{
        setTodos([])
      }
    }, [])

  useEffect(() => {
    if(Todos.length>0){
      localStorage.setItem("todos",JSON.stringify(Todos))
    }
  }, [Todos]) 

  const Add=() => {
    if(!Todo){
      alert('enter todo')
    }
    else if(Todo && edit){
      setTodos(
        Todos.map((t)=>{
          if(t.id===edit){
            return {...t,todo:Todo}
          }
          return t
        }))
        setTodo("")
        setedit(null)
    }
    else{
    const t={id:uuidv4(),todo:Todo}
    const oldtodo=JSON.parse(localStorage.getItem('todos'))||[]
    const alltodo=[...oldtodo,t]
    setTodos(alltodo)
    localStorage.setItem('todos',JSON.stringify(alltodo))  
    setTodo("")
    }
  }
  
  const Edit=(id) => {
    let newtodo=Todos.find((i)=>{
      return i.id===id;
    })
    setTodo(newtodo.todo)
    setedit(id)
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
                <button onClick={()=>Edit(item.id)}>Edit</button>
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
