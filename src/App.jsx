import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Count,setCount] = useState(0);
  function increaseCount(){
    return setCount(c => c+1)
  }
  return (
    <>
     hi
     <button onClick={increaseCount}>Increaase {Count}</button>
    </>
  )
}

export default App
