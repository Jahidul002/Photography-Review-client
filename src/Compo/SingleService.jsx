import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewUser from './ReviewUser';
import { authContext } from '../Context/ContextApi'


const SingleService = () => {
    const { user } = useContext(authContext)
    const [rev, setRev] = useState()
    const allData = useLoaderData()
    const { about, catagory, device, price, img, _id, provider } = allData
    // about
    useEffect(() => {
        fetch(`https://assignment-11-server-sable.vercel.app/reviews?eventName=${catagory}`)
            .then(res => res.json())
            .then(data => {
                setRev(data)
            })
    }, [catagory])
    // console.log(allData);


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

            <div className='mt-20'>
                <h1 className='bg-teal-800 text-center font-semibold'>Reviews Of <span className='text-2xl font-bold text-teal-400'> {catagory}</span> event</h1>
                <div className='md:grid grid-cols-3 gap-5 my-5'>
                    {
                        rev?.map(dt => <ReviewUser key={dt._id} data={dt}></ReviewUser>)
                    }
                </div>
            </div>
            <div className='my-10'>
                {user?.uid ?
                    <Link to={`/review/${_id}`}>
                        <button className='btn btn-outline'>Review Us</button>
                    </Link>
                    :
                    <Link to={`/review/${_id}`}>
                        <button className='btn btn-outline'>Log in for Review Us</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default SingleService;