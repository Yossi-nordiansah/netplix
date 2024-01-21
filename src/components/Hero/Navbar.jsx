import React from 'react';
import logo from '../../assets/image/logo.png';
import language from '/language.svg';

const Navbar = () => {
  return (
    <nav className='w-[77%] absolute left-1/2 -translate-x-1/2 flex items-center justify-between z-10'>
                <img src={logo} alt="" className='w-[201px] -mt-3 -ml-[10px]' />
                <div className='flex gap-6 items-center justify-between'>
                    <div className={`flex rounded-md relative text-white py-[2px] px-[2px]`}>
                        <img src={language} alt="" className='w-[17px] absolute left-4 top-1/2 -translate-y-1/2' />
                        <select name="" id="" className='bg-slate-400/5 focus:outline-2 appearance-none focus:outline-white focus:outline-offset-[3px] font-semibold outline-none pl-10 pr-10 w-66 border border-slate-500 py-[3px] rounded-md text-lg'>
                            <option value="" selected className='text-black block'>Bahasa Indonesia</option>
                            <option value="" className='text-black block'>English</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 top-[3px] right-2 flex items-center px-2 text-gray-700">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="CaretDown" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z" fill="white"></path></svg>
                        </div>
                    </div>
                    <a href='0' className='bg-[#e60000] py-[6px] text-white font-semibold px-[18px] rounded-md mr-2'>Masuk</a>
                </div>
            </nav>
  )
}

export default Navbar