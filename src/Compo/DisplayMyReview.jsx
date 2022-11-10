import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
const DisplayMyReview = ({ data }) => {
    const { _id, Photo, email, eventName, eventImg, review } = data
    console.log(data);

    const handleDel = () => {
        const agree = window.confirm('are you sure remove your review?')
        if (agree) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
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
                <figure><img src={eventImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {eventName}
                        <div className="badge badge-secondary">{email}</div>
                    </h2>
                    <p className='bg-green-200'>REVIEW:{review}</p>
                    <div className="card-actions justify-end">
                        <button className='btn btn-outline'> <PencilSquareIcon className="h-6 w-6 text-blue-500" /></button>
                        <button onClick={handleDel} className='btn btn-outline'> <TrashIcon className="h-6 w-6 text-blue-500" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayMyReview;