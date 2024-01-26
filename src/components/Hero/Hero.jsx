import React, { useRef } from 'react';
import bghero from '../../assets/image/bg.jpg';
import Navbar from './Navbar';

const Hero = () => {

    const inputRef = useRef();
    const focusRef = useRef();

    const handleInputOnFocus = () => {
        if(window.innerWidth <= 640){
            inputRef.current.style.fontSize = '13px';
            inputRef.current.style.top = '9px';
        }
        else{
            inputRef.current.style.fontSize = '13px';
            inputRef.current.style.top = '9px';
        }
    }
    const handleInputOnBlur = () => {
        inputRef.current.style.fontSize = '18px';
        inputRef.current.style.top = '17px';
    }

    const handlePlaceHolderOnFocused = () => {
        focusRef.current.focus();
    }

    const bggradient = {
        background: 'linear-gradient(to top, rgba(0,0,0,.9) 0, rgba(0,0,0,.4) 60%, rgba(0,0,0,.9)) 100%',
    }

    return (
        <div className='border-b-zinc-800 border-b-[10px] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bghero})` }}>
            <div style={bggradient} className='w-full'>
                <Navbar />
                <div className='sm:w-[75%] w-[85%] mx-auto z-10 sm:mt-44 mt-14  sm:pb-44 pb-10'>
                    <h1 className='text-white sm:text-[54px] text-3xl sm:leading-[69px] font-bolder text-center font-netflix'>Film, acara TV tak terbatas, dan banyak lagi</h1>
                    <p className='text-center text-white sm:text-[27px] text-[18px] font-netflixrg mt-[16px]'>Tonton di mana pun. Batalkan kapan pun.</p>
                    <p className='text-center mx-auto text-white sm:text-[22px] text-[18px] sm:w-full w-[90%] font-netflixrg mt-[19px]'>Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.</p>
                    <div className='flex sm:flex-row flex-col items-center justify-between relative mx-auto mt-5 sm:w-[62%] w-[85%] gap-2'>
                        <p ref={inputRef} onClick={handlePlaceHolderOnFocused} className='font-netflixrg absolute font-semibold text-[18px] duration-300 text-gray-400 top-[17px] left-4'>Alamat email</p>
                        <input onFocus={handleInputOnFocus} ref={focusRef} onBlur={handleInputOnBlur} className='bg-black/50 pt-6 pb-2 text-lg text-white border px-4 border-gray-400 outline-offset-[3px] rounded-md w-[100%]' type="email" />
                        <a href="" className='text-white flex sm:py-3 py-2 bg-[#e60000] sm:px-7 px-4 place-items-center gap-2 sm:text-[25px] text-[20px] justify-center rounded-lg sm:font-bold font-semibold'>Mulai <img src="arrow.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        // <div className='w-[80%] mx-auto h-20 bg-red-600'>ABCDE</div>
    )
}

export default Hero;

// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [isResponsive, setResponsive] = useState(false);

//   const handleResize = () => {
//     if (window.innerWidth <= 600) {
//       setResponsive(true);
//     } else {
//       setResponsive(false);
//     }
//   };

//   useEffect(() => {
//     handleResize(); // Panggil fungsi pertama kali
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className={isResponsive ? 'responsive' : ''}>
//       <h1>Responsive Design with React</h1>
//       <p>This is a simple responsive React app.</p>
//     </div>
//   );
// }

// export default App;
