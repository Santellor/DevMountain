import './App.css'
import { Link, Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
        <li>
        <Link to='/user/1'>User 1</Link>
        </li>
        <li>
        <Link to='/user/2'>User 2</Link>
        </li>
      </ul>
    
    <Outlet />
    </>
  )
}

export default App
