import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAllServices = ({ data }) => {

    const { about, catagory, device, img, _id, provider } = data


    return (
        <div className='mx-5'>
            <div className="card card-compac bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <p className='font-mono'>Device:{device}</p>
                <div className="card-body">
                    <h2 className="card-title">{catagory}</h2>
                    <p className='font-serif'>{about.slice(0, 50)}....<Link to={`/service/${_id}`} className='text-sky-600 underline'>See More</Link></p>
                    <div className="card-actions justify-end">
                        <Link to={`/service/${_id}`} >
                            <button className='btn btn-primary'>details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DisplayAllServices;