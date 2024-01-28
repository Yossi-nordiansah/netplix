import React from 'react';
import tvimg from '../../assets/image/tv.png';
import tvvideo from '../../assets/video/video-tv-0819.mp4';

const BannerTv = () => {
    return (
        <div className='sm:py-[175px] pt-14 pb-72 border-b-[9px] border-b-zinc-800 text-white bg-black'>
            <div className='sm:w-[75%] w-[85%] flex mx-auto justify-center gap-9 flex-col sm:flex-row'>
                <div className='sm:w-[50%] w-full'>
                    <h1 className='font-netflix sm:text-[54px] sm:text-left text-center text-3xl'>Nikmati di TV-mu</h1>
                    <p className='font-netflixrg sm:text-[27px] sm:text-left text-center text-[18px] sm:leading-[35px] leading-6 mt-4'>
                        Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.
                    </p>
                </div>
                <div className='relative sm:w-[50%] w-full h-fit'>
                    <video src={tvvideo} loop autoPlay muted className='sm:w-[376px] w-[74%] sm:-mt-7 mt-10 sm:ml-[68px] ml-10 absolute'></video>
                    <img src={tvimg} alt="" className='absolute sm:w-[520px] w-full sm:-top-20 -top-2'/>
                </div>
            </div>
        </div>
    )
} 

export default BannerTv