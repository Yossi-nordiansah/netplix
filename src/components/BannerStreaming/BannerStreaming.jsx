import React from 'react';
import deviceimg from "../../assets/image/device.png";
import devicevideo from "/src/assets/video/video-devices-id.mp4"

const BannerStreaming = () => {
  return (
    <div className='sm:py-[190px] pt-11 py-72 border-b-[9px] border-b-zinc-800 text-white bg-black'>
    <div className='sm:w-[75%] w-[90%] flex mx-auto justify-center gap-7 flex-col sm:flex-row'>
        <div className='sm:w-[50%] w-full'>
            <h1 className='font-netflix sm:text-[54px] text-[33px] sm:text-left text-center'>Tonton di mana pun</h1>
            <p className='font-netflixrg sm:text-[27px] text-[18px] sm:leading-[35px] sm:text-left text-center leading-6 sm:mt-4 mt-3'>
            Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu.
            </p>
        </div>
        <div className='relative sm:w-[50%] sm:mx-0 mx-auto w-[90%] sm:mt-0 mt-2'>
            <video src={devicevideo} loop autoPlay muted className='sm:w-[376px] w-[58%] sm:h-[110%] sm:-mt-7 mt-6 ml-[68px] absolute'></video>
            <img src={deviceimg} alt="" className='absolute w-[100%] sm:-top-20'/>
        </div>
    </div>
</div>
  )
}

export default BannerStreaming