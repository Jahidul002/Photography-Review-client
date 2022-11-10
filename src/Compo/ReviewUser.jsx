import React from 'react';
import { BeakerIcon, TrashIcon } from '@heroicons/react/24/solid'

const ReviewUser = ({ data }) => {
    const { _id, Photo, email, eventName, name, review } = data
    console.log(_id);

    const handleDel = () => {
        const confirm = window.confirm(`are you sure delete your ${eventName} review?`)

        if (confirm) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(dt => {
                    console.log(dt)
                    document.location.reload()
                })
        }

    }
    return (
        <div className='p-10 rounded-lg bg-lime-100'>
            <div>
                <div className='grid grid-cols-4'>
                    <div>
                        <img className='rounded-xl' src={Photo} alt="" />
                    </div>
                    <div className='col-span-2'>
                        <p>{name}</p>
                        <p><small>{email}</small></p>
                    </div>
                </div>
                <p className='text-xl'>{eventName}</p>
                <p className='font-semibold'>{review}</p>
            </div>
        </div>
    );
};

export default ReviewUser;