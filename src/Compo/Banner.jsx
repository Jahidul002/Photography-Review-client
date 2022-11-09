import React from 'react';
import gif from '../Utilities/camera.gif'

const Banner = () => {
    return (
        <div className='md:grid grid-cols-2'>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <h1 className='text-xl'><span className='text-5xl font-extrabold text-amber-800 font-serif'>WelCome</span> to <br /> <span className='text-4xl font-semibold text-teal-600'>Jahid's</span><span className='text-3xl font-mono font-bold'> Cam World</span></h1>
                </div>
                <button className='btn btn-primary my-5'>Our Services
                </button>
            </div>
            <div>
                <img src={gif} alt="" />
            </div>
        </div>
    );
};

export default Banner;