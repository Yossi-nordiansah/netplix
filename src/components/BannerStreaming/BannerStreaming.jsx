import React from 'react';
import deviceimg from "../../assets/image/device.png";
import devicevideo from "/src/assets/video/video-devices-id.mp4"

const BannerStreaming = () => {
  return (
    <div className='py-[190px] border-b-[9px] border-b-zinc-800 text-white bg-black'>
    <div className='w-[75%] flex mx-auto justify-center gap-7 flex-col sm:flex-row'>
        <div className='w-[50%]'>
            <h1 className='font-netflix text-[54px]'>Tonton di mana pun</h1>
            <p className='font-netflixrg text-[27px] leading-[35px] mt-4'>
            Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu.
            </p>
        </div>
        <div className='relative w-[50%] '>
            <video src={devicevideo} loop autoPlay muted className='w-[376px] h-[110%] -mt-7 ml-[68px] absolute'></video>
            <img src={deviceimg} alt="" className='absolute w-[100%] -top-20'/>
        </div>
    </div>
</div>
  )
}

export default BannerStreaming