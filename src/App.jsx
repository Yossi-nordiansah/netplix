import { useState } from 'react'
import Hero from './components/Hero/Hero.jsx'
import BannerTv from './components/Bannertv/BannerTv.jsx'
import BannerDownload from './components/BannerDownload/BannerDownload.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <BannerTv/>
      <BannerDownload/>
    </>
  )
}

export default App
