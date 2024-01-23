import { useState } from 'react'
import Hero from './components/Hero/Hero.jsx'
import BannerTv from './components/Bannertv/BannerTv.jsx'
import BannerDownload from './components/BannerDownload/BannerDownload.jsx'
import BannerStreaming from './components/BannerStreaming/BannerStreaming.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <BannerTv/>
      <BannerDownload/>
      <BannerStreaming/>
    </>
  )
}

export default App
