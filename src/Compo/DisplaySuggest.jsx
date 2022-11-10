import React from 'react';
import { Link } from 'react-router-dom';

const DisplaySuggest = ({ data }) => {
    // console.log(data);
    const { about, catagory, device, img, price } = data
    return (
        <div>
            <div className="card card-compac bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <p className='font-mono'>suggest Device:<span className='text-red-800 font-semibold'>{device}</span></p>
                <div className="card-body">
                    <h2 className="card-title">{catagory}</h2>
                    <p>price:,$<span className='text-red-700 font-semibold'>{price}</span></p>
                    <p>{about}</p>
                </div>
            </div>
        </div >
    );
};

export default DisplaySuggest;