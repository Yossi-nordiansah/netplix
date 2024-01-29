import React from 'react';
import deviceimg from "../../assets/image/device.png";
import devicevideo from "/src/assets/video/video-devices-id.mp4"
 
const BannerStreaming = () => {
  return (
    <div className='lg:py-[190px] sm:pt-16 pt-11 sm:pb-[600px] py-72 border-b-[9px] border-b-zinc-800 text-white bg-black'>
    <div className='lg:w-[75%] w-[90%] flex mx-auto justify-center gap-7 flex-col lg:flex-row'>
        <div className='lg:w-[50%] w-full'>
            <h1 className='font-netflix lg:text-[54px] sm:text-4xl text-[33px] lg:text-left text-center'>Tonton di mana pun</h1>
            <p className='font-netflixrg lg:text-[27px] sm:text-[21px] text-[18px] sm:leading-[35px] lg:text-left text-center leading-6 lg:mt-4 mt-3'>
            Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu.
            </p>
        </div>
        <div className='relative lg:w-[50%] lg:mx-0 mx-auto w-[90%] lg:mt-0 mt-2'>
            <video src={devicevideo} loop autoPlay muted className='lg:w-[65%] w-[58%] sm:left-1/2 sm:-translate-x-1/2 lg:-mt-7 sm:mt-11 mt-6 sm:ml-0 ml-[68px] absolute'></video>
            <img src={deviceimg} alt="" className='absolute w-[100%] lg:-top-20'/>
        </div>
    </div>
</div>
  )
}

export default BannerStreaming