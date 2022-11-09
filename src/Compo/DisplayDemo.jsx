import React from 'react';
import { Link } from 'react-router-dom';

const DisplayDemo = ({ data }) => {
    // console.log(data);
    const { _id, catagory, img, provider } = data
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{catagory}</h2>
                    <p>client:<span className='text-lg text-emerald-600 font-mono font-bold'>{provider}</span></p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayDemo;