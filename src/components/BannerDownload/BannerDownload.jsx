import React from 'react';
import mobileimg from '../../assets/image/mobile.jpg';
import boxshot from "../../assets/image/boxshot.png";
import downloadAnimate from "../../assets/image/download-icon.gif";

const BannerDownload = () => {
  return (
    <div className='sm:py-[85px] py-16 border-b-[9px] border-b-zinc-800 text-white bg-black'>
      <div className=' w-[95%] flex mx-auto justify-center flex-col-reverse lg:flex-row'>
        <div className='relative lg:mt-0 mt-12 xl:w-[45%] lg:w-[50%] w-full'>
          <img src={mobileimg} alt="" className='-mt-6 mx-auto lg:w-[87%] w-full' />
          <div className='absolute left-1/2 sm:bottom-6 bottom-4 bg-black items-center -translate-x-1/2 sm:py-2 py-1 rounded-xl border-[3px] xl:w-[54%] lg:w-[70%] sm:w-[59%] min-[380px]:w-[78%] w-[80%] max-[380px]:w-full flex justify-between border-zinc-600 px-3'>
              <div className='flex items-center'>
              <img src={boxshot} alt="" className='xl:w-[63px] lg:w-[17%] sm:w-12 w-9' />
              <div className='sm:ml-5 ml-2 pr-4'>
                <p className='sm:text-lg lg:text-[16px] leading-5 font-netflix xl:w-[60%] w-full max-[380px]:text-sm'>Stranger Things</p>
                <p className='text-[#3366ff] max-[380px]:text-sm'>Men-download...</p>
              </div>
              </div>
              <img src={downloadAnimate} alt="" className='w-[50px] sm:ml-0 ml-2 h-12'/>
          </div>
        </div>
        <div className='lg:w-[60%] xl:w-[45%] w-full self-center'>
          <h1 className='font-netflix lg:text-[54px] sm:text-[30px] text-[33px] lg:leading-[65px] lg:ml-0 md:mx-auto sm:mx-auto lg:text-left text-center sm:w-[80%] md:w-full sm:leading-[40px] leading-10'>Download acara TV untuk menontonnya secara offline</h1>
          <p className='font-netflixrg lg:text-[27px] sm:text-[21px] text-[18px] lg:text-left text-center sm:mt-6 mt-4 lg:w-[90%] w-full sm:leading-[35px]'>
            Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BannerDownload