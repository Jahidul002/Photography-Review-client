import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DisplayAllServices from './DisplayAllServices';

const AllServices = () => {
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
            <div className='my-10'>
                <h1>Suggest Us Event That I can Provide You</h1>
                <Link to="/eventadd">
                    <button className='btn'>Add Event</button>
                </Link>
            </div>
        </div>
    );
};

export default AllServices;