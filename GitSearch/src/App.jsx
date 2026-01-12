import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [Username, setUsername] = useState("")
  const [Details, setDetails] = useState(null)
  const [Loading, setLoading] = useState(false)

    const fetchData=async () => {
      if(Username){
        setLoading(true)
        const data=await fetch(`https://api.github.com/users/${Username}`)
        if(data.status===404){
          throw new Error("404 Not Found!!");
        }
        const res=await data.json()
        setDetails(res)
        setLoading(false)

      }
       else{
        <div>Not found!!</div>
      }
    }
    

  return (
    <>
      <div className="box">
        <h1>GitSearch</h1>
        <div className="content">
          <div className="input">
            <input onChange={(e)=>setUsername(e.target.value)} value={Username} type="text" placeholder='Enter username...' />
            <button onClick={fetchData} >Search</button>
          </div>
          <div className="data">
            {Loading && <p>Loading...</p>}
            {Details && (
               <div>
                <div className="img">
                  <img src={Details.avatar_url} alt="" />
                </div>
                <div className="content">
                  <div className="name"><h2>Name</h2>{Details.name} {Details.login} <h2>Bio</h2>{Details.bio}</div>
                  <div className="follow"><h2>Followers</h2>{Details.followers} <h2>Following</h2>{Details.following} <h2>Repositories</h2>{Details.public_repos}</div>
                  <div className="location"><h2>Location</h2>{Details.location}</div>
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
