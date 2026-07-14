import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addcourse from './components/Addcourse'
import ViewLab from './components/ViewLab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Addcourse/>
      <ViewLab/>
    </>
  )
}

export default App
