import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayDemo from './DisplayDemo';

const Demo = () => {
    const [demoData, setDemoData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/demo')
            .then(res => res.json())
            .then(data => setDemoData(data))
    }, [])
    // console.log(demoData);
    return (
        <div className='flex flex-col items-center mx-10'>
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