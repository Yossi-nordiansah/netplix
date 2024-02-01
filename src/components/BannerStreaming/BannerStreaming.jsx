import React from 'react';
import deviceimg from "../../assets/image/device.png";
import devicevideo from "/src/assets/video/video-devices-id.mp4"
 
const BannerStreaming = () => {
  return (
    <div className='xl:py-24 lg:py-20 sm:py-16 py-11 border-b-[9px] border-b-zinc-800 text-white bg-black'>
    <div className='xl:w-[75%] w-[95%] flex mx-auto justify-center gap-7 flex-col lg:flex-row'>
        <div className='xl:w-[50%] lg:w-[60%] w-full self-center'>
            <h1 className='font-netflix xl:text-[45px] lg:text-[54px] sm:text-4xl text-[33px] lg:text-left text-center'>Tonton di mana pun</h1>
            <p className='font-netflixrg xl:text-[23px] lg:text-[27px] sm:text-[21px] text-[18px] sm:leading-[35px] lg:text-left text-center leading-6 lg:mt-8 mt-3'>
            Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu.
            </p>
        </div>
        <div className='relative lg:w-1/2 lg:mx-0 mx-auto w-[90%] xl:-mt-11 mt-2'>
            <video src={devicevideo} loop autoPlay muted className='lg:w-[65%] w-[58%] sm:left-1/2 sm:-translate-x-1/2 lg:mt-7 sm:mt-11 min-[380px]:mt-[27px] mt-6 sm:ml-0 left-1/2 -translate-x-1/2 absolute'></video>
            <img src={deviceimg} alt="" className='relative w-[100%] '/>
        </div>
    </div>
</div>
  )
}

export default BannerStreaming