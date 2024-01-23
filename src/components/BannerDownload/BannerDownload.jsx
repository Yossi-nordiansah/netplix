import React from 'react';
import mobileimg from '../../assets/image/mobile.jpg';
import boxshot from "../../assets/image/boxshot.png";
import downloadAnimate from "../../assets/image/download-icon.gif";

const BannerDownload = () => {
  return (
    <div className='py-[100px] border-b-[9px] border-b-zinc-800 text-white bg-black'>
      <div className='w-[80%] flex mx-auto justify-cente flex-col sm:flex-row'>
        <div className='relative w-[50%]'>
          <img src={mobileimg} alt="" className='-mt-6 mx-auto w-[87%]' />

          <div className='absolute left-1/2 bottom-6 bg-black items-center -translate-x-1/2 py-2 rounded-xl border-[3px] w-[54%] flex justify-center border-zinc-600 '>
              <img src={boxshot} alt="" className='w-[63px]' />
              <div className='ml-5'>
                <p className='text-lg leading-5 font-netflix w-[60%]'>Stranger Things</p>
                <p className='text-[#3366ff]'>Men-download...</p>
              </div>
              <img src={downloadAnimate} alt="" className='w-[50px] h-12'/>
          </div>
        </div>
        <div className='w-[50%]'>
          <h1 className='font-netflix text-[54px] leading-[65px]'>Download acara TV untuk menontonnya secara offline</h1>
          <p className='font-netflixrg text-[27px] mt-6 w-[90%] leading-[35px]'>
            Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BannerDownload