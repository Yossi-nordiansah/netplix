import { useState } from 'react'
import Hero from './components/Hero/Hero.jsx'
import BannerTv from './components/Bannertv/BannerTv.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <BannerTv/>
    </>
  )
}

export default App
