import React, { useRef } from 'react';
import bghero from '../../assets/image/bg-hero.jpg';
import Navbar from './Navbar';

const Hero = () => {
    
    const inputRef = useRef();
    const focusRef = useRef();

    const handleInputOnFocus = () => {
        inputRef.current.style.fontSize='13px';
        inputRef.current.style.top='9px';
    }
    const handleInputOnBlur = () => {
        inputRef.current.style.fontSize='18px';
        inputRef.current.style.top='17px';
    }

    const handlePlaceHolderOnFocused = () => {
        focusRef.current.focus();
    }

    const bggradient = {
        background: 'linear-gradient(to top, rgba(0,0,0,.9) 0, rgba(0,0,0,.4) 60%, rgba(0,0,0,.9)) 100%',
    }

    return (
        <div className='overflow-hidden relative border-b-zinc-800 border-b-[9px]'>
            <Navbar/>
            <div className='w-[75%] px-1 absolute left-1/2 -translate-x-1/2 z-10 top-[278px]'>
                <h1 className='text-white text-[54px] leading-[69px] font-bolder text-center font-netflix'>Film, acara TV tak terbatas, dan banyak lagi</h1>
                <p className='text-center text-white text-[27px] font-netflixrg mt-[16px] font-semibold'>Tonton di mana pun. Batalkan kapan pun.</p>
                <p className='text-center text-white text-[22px] font-netflixrg mt-[19px] font-semibold'>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
                <div className='flex justify-between relative mx-auto mt-5 w-[62%] gap-2'>
                    <p ref={inputRef} onClick={handlePlaceHolderOnFocused} className='absolute font-netflixrg font-semibold text-[18px] duration-300 text-gray-400 top-[17px] left-4'>Alamat email</p>
                    <input onFocus={handleInputOnFocus} ref={focusRef} onBlur={handleInputOnBlur} className='bg-black/50 pt-6 pb-2 text-lg text-white border px-4 border-gray-400 outline-offset-[3px] rounded-md w-[75%]' type="email" />
                    <a href="" className='text-white flex h-16 bg-[#e60000] w-[25%] place-items-center gap-2 text-[25px] justify-center rounded-lg font-bold'>Mulai <img src="arrow.svg" alt="" /></a>
                </div>
            </div>
            <img src={bghero} alt="" className='scale-125 -translate-y-[13%] object-cover' />
            <div style={bggradient} className='absolute top-0 bottom-0 right-0 left-0'></div>
        </div>
    )
}

export default Hero