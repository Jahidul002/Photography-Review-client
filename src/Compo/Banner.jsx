import React from 'react';
import gif from '../Utilities/camera.gif'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='md:grid grid-cols-2'>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <h1 className='text-xl'><span className='text-5xl font-extrabold text-amber-800 font-serif'>WelCome</span> to <br /> <span className='text-4xl font-semibold text-teal-600'>Jahid's</span><span className='text-3xl font-mono font-bold'> Cam World</span></h1>
                </div>
                <Link to="/services">
                    <button className='btn btn-primary my-5'>My Services<ArrowSmallRightIcon className="h-6 w-6 text-green-800" />
                    </button>
                </Link>
            </div>
            <div>
                <img src={gif} alt="" />
            </div>
        </div>
    );
};

export default Banner;