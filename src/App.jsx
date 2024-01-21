import { useState } from 'react'
import Hero from './components/Hero/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
    </>
  )
}

export default App
