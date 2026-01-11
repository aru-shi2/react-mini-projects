import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [Username, setUsername] = useState("")
  const [Details, setDetails] = useState(null)

    const fetchData=async () => {
      if(Username){
        const data=await fetch(`https://api.github.com/users/${Username}`)
        const res=await data.json()
        setDetails(res)
      }
      else{
        <div>Not found!!</div>
      }
    }
    

  return (
    <>
      <div className="box">
        <div className="content">
          <div className="input">
            <input onChange={(e)=>setUsername(e.target.value)} value={Username} type="text" placeholder='Enter username...' />
            <button onClick={fetchData} >Search</button>
          </div>
          <div className="data">
            {Details && (
               <div>
                <div className="img">
                  <img src={Details.avatar_url} alt="" />
                </div>
                <div className="content">
                  {Details.name}
                  {Details.login}
                  {Details.bio}
                  {Details.followers}
                  {Details.following}
                  {Details.public_repos}
                  {Details.location}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
