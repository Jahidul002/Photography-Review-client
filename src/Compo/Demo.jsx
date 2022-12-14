import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayDemo from './DisplayDemo';

const Demo = () => {
    const [demoData, setDemoData] = useState([])

    useEffect(() => {
        fetch('https://assignment-11-server-sable.vercel.app/demo')
            .then(res => res.json())
            .then(data => setDemoData(data))
    }, [])
    // console.log(demoData);
    return (
        <div className='flex flex-col items-center mx-10'>
            <h1 className='text-3xl font-bold underline mb-3'>My Some Creation</h1>
            <div className='md:grid grid-cols-3 gap-10 container mx-auto'>
                {
                    demoData.map(dt => <DisplayDemo key={dt._id} data={dt}></DisplayDemo>)
                }
            </div>
            <Link to="services">
                <button className='btn btn-wide  btn-success my-10'>Load More</button>
            </Link>
        </div>
    );
};

export default Demo;