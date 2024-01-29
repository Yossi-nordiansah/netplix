import React from 'react';
import tvimg from '../../assets/image/tv.png';
import tvvideo from '../../assets/video/video-tv-0819.mp4';

const BannerTv = () => {
    return (
        <div className='lg:py-[175px] sm:pt-20 pt-14 sm:pb-[550px] pb-72 border-b-[9px] border-b-zinc-800 text-white bg-black'>
            <div className='lg:w-[75%] sm:w-[90%] w-[85%] flex mx-auto justify-center gap-9 flex-col lg:flex-row'>
                <div className='lg:w-[50%] w-full'>
                    <h1 className='font-netflix lg:text-[54px] sm:text-4xl lg:text-left text-center text-3xl'>Nikmati di TV-mu</h1>
                    <p className='font-netflixrg lg:text-[27px] sm:text-[21px] lg:text-left text-center text-[18px] sm:leading-[35px] leading-6 mt-4'>
                        Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.
                    </p>
                </div>
                <div className='relative lg:w-[50%] w-full h-fit lg:-mt-16'>
                    <video src={tvvideo} loop autoPlay muted className='lg:w-[376px] w-[74%] lg:-mt-0 sm:mt-16 mt-10 sm:ml-[68px] ml-10 absolute'></video>
                    <img src={tvimg} alt="" className='absolute lg:w-[520px] sm:w-[90%] sm:left-1/2 sm:-translate-x-1/2 w-full lg:-top-20 -top-2'/>
                </div>
            </div>
        </div>
    )
} 

export default BannerTv