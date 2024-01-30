import React from 'react';
import tvimg from '../../assets/image/tv.png';
import tvvideo from '../../assets/video/video-tv-0819.mp4';

const BannerTv = () => {
    return (
        <div className='lg:py-[175px] xl:py-52 sm:pt-20 pt-14 sm:pb-[550px] pb-72 border-b-[9px] border-b-zinc-800 text-white bg-black'>
            <div className='lg:w-[90%] sm:w-[90%] w-[85%] flex mx-auto justify-center gap-9 flex-col lg:flex-row'>
                <div className='xl:w-[40%] lg:w-[60%] w-full lg:-mt-10'>
                    <h1 className='font-netflix lg:text-[54px] lg:leading-[60px] sm:text-4xl lg:text-left text-center text-3xl '>Nikmati di TV-mu</h1>
                    <p className='font-netflixrg lg:text-[27px] sm:text-[21px] lg:text-left text-center text-[18px] sm:leading-[35px] leading-6 lg:mt-10 mt-4'>
                        Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.
                    </p>
                </div>
                <div className='relative xl:w-[40%] lg:w-[50%] sm:w-[80%] lg:left-0 lg:translate-x-0 left-1/2 -translate-x-1/2 h-fit lg:-mt-16'>
                    <video src={tvvideo} loop autoPlay muted className='xl:w-[75%] sm:w-[90%] xl:-top-3 lg:w-[90%] lg:top-7 w-[77%] left-1/2 -translate-x-1/2 absolute top-10'></video>
                    {/* <img src={tvimg} alt="" className='absolute lg:w-[100%] sm:w-[90%] sm:left-1/2 sm:-translate-x-1/2 w-full lg:-top-20 -top-2'/> */}
                    <img src={tvimg} alt="" className='absolute lg:w-[100%] sm:w-[90%] left-1/2 -translate-x-1/2 w-full xl:-top-20 lg:-top-5 -top-2'/>
                </div>
            </div>
        </div>
    )
} 

export default BannerTv