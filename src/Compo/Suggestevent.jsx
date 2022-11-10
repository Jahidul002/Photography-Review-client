import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplaySuggest from './DisplaySuggest';

const Suggestevent = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data);
    return (
        <div className='md:grid grid-cols-3 gap-10'>
            {
                data?.map(dt => <DisplaySuggest key={dt._id} data={dt}></DisplaySuggest>)
            }
        </div>
    );
};

export default Suggestevent;