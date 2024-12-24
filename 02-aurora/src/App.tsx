import { useState } from 'react'
import './App.css'
import { AuroraHero } from './components/AuroraHero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuroraHero />
    </>
  )
}

export default App
