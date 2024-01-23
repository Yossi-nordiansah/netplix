import React from 'react';
import kidsimg from "/src/assets/image/kids.png";

const BannerKids = () => {
    return (
        <div className='py-[88px] border-b-[9px] border-b-zinc-800 text-white bg-black'>
            <div className='w-[80%] flex mx-auto justify-center flex-col sm:flex-row items-center'>
                <div className='relative w-[47%]'>
                    <img src={kidsimg} alt="" className='-mt-6 mx-auto w-full' />
                </div>
                <div className='w-[47%]'>
                    <h1 className='font-netflix text-[54px] leading-[65px]'>Buat profil untuk anak</h1>
                    <p className='font-netflixrg text-[27px] mt-6 w-full leading-[35px]'>
                    Kirim anak-anak untuk bertualang bersama karakter favorit mereka di dunia yang dibuat khusus untuk mereka—gratis dengan keanggotaanmu.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BannerKids