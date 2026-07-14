import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addcourse from './components/Addcourse'
import ViewLab from './components/ViewLab'
import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
         
       <Route path='/' element={<Addcourse />} />
        <Route path='/Viewlab' element={<ViewLab />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
