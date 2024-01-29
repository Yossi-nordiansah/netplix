import React from 'react';
import mobileimg from '../../assets/image/mobile.jpg';
import boxshot from "../../assets/image/boxshot.png";
import downloadAnimate from "../../assets/image/download-icon.gif";

const BannerDownload = () => {
  return (
    <div className='sm:py-[100px] py-16 border-b-[9px] border-b-zinc-800 text-white bg-black'>
      <div className='w-[95%] flex mx-auto justify-center flex-col-reverse lg:flex-row'>
        <div className='relative lg:mt-0 mt-12 lg:w-[50%] w-full'>
          <img src={mobileimg} alt="" className='-mt-6 mx-auto lg:w-[87%] w-full' />
          <div className='absolute left-1/2 sm:bottom-6 bottom-4 bg-black items-center -translate-x-1/2 sm:py-2 py-1 rounded-xl border-[3px] lg:w-[54%] sm:w-[59%] w-[78%] flex lg:justify-center sm:justify-evenly justify-center border-zinc-600 '>
              <img src={boxshot} alt="" className='lg:w-[63px] sm:w-12 w-9' />
              <div className='sm:ml-5 ml-2 pr-4'>
                <p className='sm:text-lg text-base leading-5 font-netflix lg:w-[60%] w-full'>Stranger Things</p>
                <p className='text-[#3366ff]'>Men-download...</p>
              </div>
              <img src={downloadAnimate} alt="" className='w-[50px] sm:ml-0 ml-2 h-12'/>
          </div>
        </div>
        <div className='lg:w-[50%] w-full'>
          <h1 className='font-netflix lg:text-[54px] sm:text-4xl text-[33px] lg:leading-[65px] lg:text-left text-center sm:leading-[50px] leading-10'>Download acara TV untuk menontonnya secara offline</h1>
          <p className='font-netflixrg lg:text-[27px] sm:text-[21px] text-[18px] lg:text-left text-center sm:mt-6 mt-4 lg:w-[90%] w-full sm:leading-[35px]'>
            Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BannerDownload