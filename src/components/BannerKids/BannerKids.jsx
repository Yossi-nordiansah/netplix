import React from 'react';
import kidsimg from "/src/assets/image/kids.png";

const BannerKids = () => {
    return (
        <div className='lg:py-[88px] sm:py-16 py-10 border-b-[9px] border-b-zinc-800 text-white bg-black'>
            <div className='lg:w-[80%] sm:w-[95%] w-[90%] flex mx-auto justify-center flex-col-reverse lg:flex-row items-center'>
                <div className='relative mx-auto lg:w-[47%] w-full lg:mt-0 mt-12'>
                    <img src={kidsimg} alt="" className='-mt-6 mx-auto w-full' />
                </div>
                <div className='lg:w-[47%] w-full'>
                    <h1 className='font-netflix lg:text-[54px] lg:text-left text-center sm:text-4xl text-3xl lg:leading-[65px]'>Buat profil untuk anak</h1>
                    <p className='font-netflixrg lg:text-[27px] sm:text-[21px] text-[18px] lg:text-left text-center lg:mt-6 sm:mt-6 mt-1 w-full leading-5 lg:leading-[35px]'>
                    Kirim anak-anak untuk bertualang bersama karakter favorit mereka di dunia yang dibuat khusus untuk mereka—gratis dengan keanggotaanmu.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BannerKids