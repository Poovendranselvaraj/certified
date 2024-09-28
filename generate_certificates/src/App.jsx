import { useState } from 'react'
import Home from './Home'
import Register from './pages/Register'
import Login from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      {/* <Register /> */}
      <Login />
    </>
  )
}

export default App
 