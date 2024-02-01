import React from 'react';
import tvimg from '../../assets/image/tv.png';
import tvvideo from '../../assets/video/video-tv-0819.mp4';

const BannerTv = () => {
    return (
        <div className='lg:py-28 xl:py-24 sm:py-16 py-12 border-b-[9px] border-b-zinc-800 text-white bg-black'>
            <div className='lg:w-[95%] sm:w-[90%] w-[85%] flex mx-auto justify-center items-center gap-0 flex-col lg:flex-row'>
                <div className='xl:w-[40%] lg:w-[60%] w-full'>
                    <h1 className='font-netflix lg:text-[50px] lg:leading-[60px] sm:text-[30px] lg:text-left text-center text-3xl '>Nikmati di TV-mu</h1>
                    <p className='font-netflixrg lg:text-[24px] sm:text-[19px] lg:text-left text-center text-[18px] sm:leading-[30px] leading-6 lg:mt-6 mt-4'>
                        Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.
                    </p>
                </div>
                <div className='relative xl:w-[40%] lg:w-[60%] md:w-[80%] sm:w-[100%] w-full lg:left-0 lg:translate-x-0 top-0 h-fit xl:-mt-12 xl:top-6 lg:-mt-20'>
                    <video src={tvvideo} loop autoPlay muted className='xl:w-[80%] md:w-[80%] lg:w-[80%] sm:w-[80%] min-[380px]:w-[85%] w-[80%] sm:top-20 md:top-20 left-8 lg:left-16 sm:left-[75px] absolute lg:top-16 min-[380px]:top-12 top-9'></video>
                    <img src={tvimg} alt="" className='relative lg:w-full mx-auto w-full'/>
                </div>
            </div>
        </div>
    )
} 

export default BannerTv