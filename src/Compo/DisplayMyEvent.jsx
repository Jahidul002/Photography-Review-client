import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';

const DisplayMyEvent = ({ data }) => {
    const { about, catagory, device, img, price, _id } = data
    // console.log(data);

    const handleDel = () => {
        const agree = window.confirm('are you sure remove your review?')
        if (agree) {
            fetch(`http://localhost:5000/services/${_id}`, {
                method: "DELETE",
            })
                .then(res => { })
                .then(data => {
                    window.location.reload()
                })
        }
    }



    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {catagory}
                        <div className="badge badge-secondary">price:${price}</div>
                    </h2>
                    <p className='bg-green-200'>description:{about}</p>
                    <div className="card-actions justify-end">
                        <button className='btn btn-outline'> <PencilSquareIcon className="h-6 w-6 text-blue-500" /></button>
                        <button onClick={handleDel} className='btn btn-outline'> <TrashIcon className="h-6 w-6 text-blue-500" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayMyEvent;