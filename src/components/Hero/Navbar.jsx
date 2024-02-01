import { useRef } from 'react';
import logo from '../../assets/image/logo.png';
import language from '/language.svg';


const Navbar = () => {

    const inputRef = useRef();

    const handleOnFocused = () => {
        inputRef.current.focus();
        inputRef.current.click();
    }

    return (
        <nav className='lg:w-[77%] sm:w-[90%] w-[85%] lg:pt-0 sm:pt-6 pt-2 mx-auto flex items-center justify-between'>
            <img src={logo} alt="" className='lg:w-[19%] sm:w-[15%] w-[33%] sm:-mt-3 -ml-[10px]' />
            <div className='flex sm:gap-6 gap-2 items-center sm:justify-between justify-center'>
                <div onClick={handleOnFocused} className={`flex rounded-md relative text-white py-[2px] px-[2px] sm:w-[100%]`}>
                    <label htmlFor="language">
                    <img  src={language} alt="" className='w-[17px] absolute left-[14px] top-1/2 -translate-y-1/2' />
                    </label>
                    <select name="language" ref={inputRef} id="language" className='bg-black/30 focus:outline-2 appearance-none focus:outline-white focus:outline-offset-[3px] outline-none sm:pl-9 pl-5 pr-10 font-netflixrg sm:w-full w-[0px] border border-slate-500 sm:py-[3px] py-[0px] rounded-[4px] text-[16px]'>
                        <option value="" selected className='text-black bg-white'>Bahasa Indonesia</option>
                        <option value="" className='text-black bg-white'>English</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 top-[3px] sm:right-2 right-0 flex items-center px-2 text-gray-700">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="CaretDown" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" fill="white"></path></svg>
                    </div>
                </div>
                <a href='#' className='bg-[#e60000] font-netflixrg sm:py-[5px] py-[3px] hover:bg-[#b30000] text-[14px] text-white font-semibold sm:px-[16px] px-[10px] rounded-[4px] sm:mr-2 mr-0'>Masuk</a>
            </div>
        </nav>
    )
}

export default Navbar