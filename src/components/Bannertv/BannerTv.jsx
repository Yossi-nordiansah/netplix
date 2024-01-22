import React from 'react'

const BannerTv = () => {
    return (
        <div className='py-[145px] border-b-[9px] border-b-zinc-800 text-white bg-black'>
            <div className='w-[80%] flex mx-auto justify-center items-center gap-16 flex-col sm:flex-row'>
                <div className='w-[48%]'>
                    <h1 className='font-netflix text-[54px]'>Nikmati di TV-mu</h1>
                    <p className='font-netflixrg text-[27px]'>
                        Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.
                    </p>
                </div>
                <div className='relative w-[600px]'>
                    <video src="src\assets\video\video-tv-0819.mp4" loop autoPlay className='w-[376px] h-64 ml-[70px]'></video>
                    <img src="src\assets\image\tv.png" alt="" className='absolute w-[520px] block -top-14'/>
                </div>
            </div>
        </div>
    )
} 

export default BannerTv