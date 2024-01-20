import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <video autoPlay muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"></video>
      <h1 className='text-center text-5xl font-extrabold'>Film, acara TV tak terbatas, dan banyak lagi</h1>
    </>
  )
}

export default App
