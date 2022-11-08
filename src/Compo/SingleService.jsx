import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleService = () => {
    const allData = useLoaderData()
    const { about, catagory, device, img, _id, provider } = allData
    return (
        <div className='my-10 mx-5 '>
            <div className='flex justify-center'>
                <img className='rounded-lg' src={img} alt="" />
            </div>
            <p className='text-center font-semibold'>Device:<small className='text-rose-500'>{device}</small></p>
            <div className='container mx-auto'>
                <div>
                    <h1 className=' md:text-5xl text-emerald-900 font-extrabold'>{catagory}</h1>
                    <p><small>client:<span className='font-bold'>{provider}</span></small></p>
                    <p className='font-semibold my-7'><span className='text-orange-800 text-2xl'>{about.slice(0, 1)}</span>{about.slice(1, 1000)}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;