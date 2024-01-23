import React from 'react';
import tvimg from '../../assets/image/tv.png';
import tvvideo from '../../assets/video/video-tv-0819.mp4';

const BannerTv = () => {
    return (
        <div className='py-[175px] border-b-[9px] border-b-zinc-800 text-white bg-black'>
            <div className='w-[75%] flex mx-auto justify-center gap-9 flex-col sm:flex-row'>
                <div className='w-[50%]'>
                    <h1 className='font-netflix text-[54px]'>Nikmati di TV-mu</h1>
                    <p className='font-netflixrg text-[27px] leading-[35px] mt-4'>
                        Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.
                    </p>
                </div>
                <div className='relative w-[50%] '>
                    <video src={tvvideo} loop autoPlay muted className='w-[376px] h-64 -mt-7 ml-[68px] absolute'></video>
                    <img src={tvimg} alt="" className='absolute w-[520px] -top-20'/>
                </div>
            </div>
        </div>
    )
} 

export default BannerTv