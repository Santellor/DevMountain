import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App() {

  const dispatch = useDispatch
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    console.log('username', username) 
    console.log('password', password)
    e.preventDefault()

    const bodyObj = {
      username: username,
      password: password,
    }
    console.log(bodyObj)
    const {data} = await axios.post("/api/login", bodyObj)
    console.log(`what`,data)
      
  }

  const handleLogout = () => {
    console.log("logging out")
    axios.get("/api/logout")
    .then((res) => {
      console.log(res.data)
      if (res.data.success) {
        // I want to also erase this user's Id from Redux
        dispatch({
          type: "LOGOUT"
        })
      }
    })
  }

  const sessionCheck = () => {
    // this fn should ping the server to "/api/session-check" and if the response is successful with a userId, I want to dispatch that userId to Redux
    axios.get("/api/session-check")
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: "USER_AUTH",
          payload: res.data.userId
        })
      }
    })
  }

  // How can we run sessionCheck ONLY on initial load of the page?
  useEffect(() => {
    sessionCheck()
  }, [])
  return (
    <>
      <nav>
        <h1>Home</h1>
        {userId &&
          <button onClick={handleLogout}>Logout</button>
        }
        {!userId &&
          <button>Login</button>
        }
      </nav>

      {!userId &&
        <form onSubmit={handleLogin}>
          <input 
            type='text' 
            value={username} 
            placeholder='Username' 
            onChange={(e) => setUsername(e.target.value)}
            />
          <input 
            type='password'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            />
          <input 
            type='submit'
            />
        </form>
      }

      {userId && 
        <h3>Welcome, user # {userId}</h3>
      }
    </>
  )
}

export default App
