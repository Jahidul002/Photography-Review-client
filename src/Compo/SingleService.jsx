import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleService = () => {
    const allData = useLoaderData()
    const { about, catagory, device, price, img, _id, provider } = allData






    return (
        <div className='my-10 mx-5 '>
            <div>
                <div className='flex justify-center'>
                    <img className='rounded-lg' src={img} alt="" />
                </div>
                <p className='text-center font-semibold'>Device:<small className='text-rose-500'>{device}</small></p>
                <div className='container mx-auto'>
                    <div>
                        <h1 className=' md:text-5xl text-emerald-900 font-extrabold'>{catagory}</h1>
                        <p><small>client:<span className='font-bold'>{provider}</span></small></p>
                        <p className='text-xl'><span className='text-orange-900 font-extrabold'>Price</span>:$<span className='text-red-700 font-semibold'>{price}</span></p>
                        <p className='font-semibold my-7'><span className='text-orange-800 text-2xl'>{about.slice(0, 1)}</span>{about.slice(1, 1000)}</p>
                    </div>
                </div>
            </div>
            <Link to={`/review/${_id}`}>
                <button className='btn btn-outline'>Review Us</button>
            </Link>
        </div>
    );
};

export default SingleService;