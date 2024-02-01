import React, { useEffect, useRef  } from 'react';
import bghero from '../../assets/image/bg.jpg';
import Navbar from './Navbar';

const Hero = () => {

    const inputRef = useRef();
    const focusRef = useRef();

    const handleInputOnFocus = () => {
        if(window.screen.availWidth <= 640){
            inputRef.current.style.fontSize = '12px';
            inputRef.current.style.top = '3px';
        }
        else if(window.screen.availWidth >640){
            inputRef.current.style.fontSize = '13px';
            inputRef.current.style.top = '9px';
        }
    }
    const handleInputOnBlur = () => {
        if(window.screen.availWidth <= 640){
            inputRef.current.style.fontSize = '16px';
            inputRef.current.style.top = '13px';
        }
        else if(window.screen.availWidth > 640){
            inputRef.current.style.fontSize = '16px';
            inputRef.current.style.top = '17px';
        }
        focusRef.current.value="";
    }

    const handlePlaceHolderOnFocused = () => {
        focusRef.current.focus();
    }

    const bggradient = {
        background: 'linear-gradient(to top, rgba(0,0,0,.9) 0, rgba(0,0,0,.4) 60%, rgba(0,0,0,.9)) 100%',
    }

    return (
        <div className=' bg-no-repeat bg-center bg-cover border-b-zinc-800 border-b-[10px]' style={{ backgroundImage: `url(${bghero})` }}>
            <div style={bggradient} className='w-full -mb-[1px]'>
                <Navbar />
                <div className='lg:w-[75%] sm:w-[90%] w-[90%] mx-auto z-10 lg:mt-[155px] sm:mt-28 mt-14 lg:pb-44 sm:pb-28 pb-9'>
                    <h1 className='text-white lg:text-[48px] sm:text-4xl text-3xl sm:leading-[60px] font-bolder text-center font-netflix'>Film, acara TV tak terbatas, dan banyak lagi</h1>
                    <p className='text-center text-white lg:text-[24px] sm:text-[21px] text-[18px] font-netflixrg mt-[16px]'>Tonton di mana pun. Batalkan kapan pun.</p>
                    <p className='text-center mx-auto text-white lg:text-[20px] sm:text-[21px] text-[18px] sm:w-full w-[90%] font-netflixrg mt-[19px]'>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
                    <div className='flex sm:flex-row flex-col items-center justify-between relative mx-auto mt-5 lg:w-[62%] sm:w-[80%] w-[90%] sm:gap-2 gap-4'>
                        <p ref={inputRef} onClick={handlePlaceHolderOnFocused} className='font-netflixrg absolute text-[16px] duration-300 text-gray-400 sm:top-[17px] top-[13px] left-4'>Alamat email</p>
                        <input onFocus={handleInputOnFocus} ref={focusRef} onBlur={handleInputOnBlur} className='bg-black/50 sm:pt-6 pt-5 sm:pb-1 pb-1 sm:text-lg text-[16px] text-white border px-4 border-gray-400 outline-offset-[3px] sm:rounded-md rounded-[4px] w-[100%]' type="email" />
                        <a href="" className='text-white flex sm:py-[9px] py-2 bg-[#e60000] sm:px-8 px-4 place-items-center gap-2 sm:text-[25px] text-[20px] justify-center sm:rounded-[4px] rounded-[4px] sm:font-semibold font-semibold'>Mulai <img src="arrow.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;

