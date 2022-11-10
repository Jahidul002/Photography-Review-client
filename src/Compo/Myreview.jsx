import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { authContext } from '../Context/ContextApi';
import DisplayMyReview from './DisplayMyReview';

const Myreview = () => {
    const { user } = useContext(authContext)
    const [review, setReview] = useState()
    useEffect(() => {
        fetch(`https://assignment-11-server-sable.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])
    // console.log(review);

    return (
        <div className='md:grid grid-cols-3'>
            {review?.length === 0 ? <p className='text-rose-800 text-4xl font-extrabold text-center'>No Review Added</p> :
                <>
                    {
                        review?.map(dt => <DisplayMyReview key={dt._id} data={dt}></DisplayMyReview>)
                    }
                </>
            }

        </div>
    );
};

export default Myreview;