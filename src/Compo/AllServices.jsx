import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../Context/ContextApi';
import DisplayAllServices from './DisplayAllServices';
import Suggestevent from './Suggestevent';

const AllServices = () => {
    const { user } = useContext(authContext)
    const allData = useLoaderData()
    return (
        <div>
            <div>
                <div className='bg-emerald-300 h-16 my-10'>
                    <h1 className='xs:text-lg md:text-3xl text-center font-serif'>The Services we Provide</h1>
                </div>
                <div className='md:grid grid-cols-3 gap-10 container mx-auto'>
                    {
                        allData.map(data => <DisplayAllServices key={data._id} data={data}></DisplayAllServices>)
                    }
                </div>
            </div>
            <div className='my-10 flex justify-between bg-teal-800'>
                <h1 className=' text-2xl py-5 text-center font-bold'>Suggest Us Event That I can Provide You</h1>
                <div className='py-3'>
                    {
                        user?.uid ? <Link to="/eventadd">
                            <button className='btn'>Add Event</button>
                        </Link> :
                            <Link to="/signin" className='btn'>Log In for Add event</Link>
                    }
                </div>
            </div>
            <div>
                <Suggestevent></Suggestevent>
            </div>
        </div>
    );
};

export default AllServices;