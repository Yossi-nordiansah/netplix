import React from 'react'

const BannerDownload = () => {
  return (
    <div className='py-[110px] border-b-[9px] border-b-zinc-800 text-white bg-black'>
      <div className='w-[80%] flex mx-auto justify-center items-center gap-16 flex-col sm:flex-row'>
        <div className='relative w-[600px]'>
          <video src="src\assets\video\video-tv-0819.mp4" loop autoPlay className='w-[376px] h-64 ml-[70px]'></video>
          <img src="src\assets\image\tv.png" alt="" className='absolute w-[520px] block -top-14' />
        </div>
        <div className='w-[50%]'>
          <h1 className='font-netflix text-[54px] leading-[60px]'>Download acara TV untuk menontonnya secara offline</h1>
          <p className='font-netflixrg text-[27px] mt-6 leading-[35px]'>
            Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BannerDownload