import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bgImg from './assets/main-bg.svg'
import './App.css'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='background-img'>
      
      <Navbar 
        logo={reactLogo} 
        logoName='test2'
        route='#'
      />
      <div className='info-box'>
        <Header />
        <MainComponent />
      </div>
    </div>
  )
}

export default App
