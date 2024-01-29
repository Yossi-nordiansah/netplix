import { useState } from 'react'
import Hero from './components/Hero/Hero.jsx'
import BannerTv from './components/Bannertv/BannerTv.jsx'
import BannerDownload from './components/BannerDownload/BannerDownload.jsx'
import BannerStreaming from './components/BannerStreaming/BannerStreaming.jsx'
import BannerKids from './components/BannerKids/BannerKids.jsx'
import QuestionSection from './components/QuestionSection/QuestionSection.jsx'

function App() {

  return (
    <div className='w-full mx-auto'>
      <Hero/>
      <BannerTv/>
      <BannerDownload/>
      <BannerStreaming/>
      <BannerKids/>
      <QuestionSection/>
    </div>
  )
}

export default App
