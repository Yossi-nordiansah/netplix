import React from 'react';
import mobileimg from '../../assets/image/mobile.jpg';

const BannerDownload = () => {
  return (
    <div className='py-[90px] border-b-[9px] border-b-zinc-800 text-white bg-black'>
      <div className='w-[80%] flex mx-auto justify-cente flex-col sm:flex-row'>
        <div className='relative w-[50%]'>
          <img src={mobileimg} alt="" className='-mt-6 mx-auto w-[87%]' />
          <div className='absolute left-1/2 -translate-x-1/2 border border-zinc-600 '></div>
        </div>
        <div className='w-[50%]'>
          <h1 className='font-netflix text-[54px] leading-[65px]'>Download acara TV untuk menontonnya secara offline</h1>
          <p className='font-netflixrg font-extrabold text-[25px] mt-6 w-[90%] leading-[35px]'>
            Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BannerDownload