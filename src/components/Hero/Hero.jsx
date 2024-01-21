import React from 'react';
import bghero from '../../assets/image/bg-hero.jpg';
import Navbar from './Navbar';

const Hero = () => {

    const bggradient = {
        background: 'linear-gradient(to top, rgba(0,0,0,.9) 0, rgba(0,0,0,.3) 60%, rgba(0,0,0,.9)) 100%',
    }

    return (
        <div className='overflow-hidden relative'>
            <Navbar/>
            <img src={bghero} alt="" className='scale-125 -translate-y-[13%] object-cover' />
            <div style={bggradient} className='absolute top-0 bottom-0 right-0 left-0'></div>
        </div>
    )
}

export default Hero