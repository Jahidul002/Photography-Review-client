import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AddReview = () => {
    const [data, setData] = useState()
    const allDAta = useLoaderData()
    const { catagory, _id } = allDAta
    // console.log(catagory, _id);
    const handleSub = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const Photo = form.url.value
        const number = form.number.value
        const reviewTxt = form.review.value
        const reviewData = {
            eventName: catagory,
            eventID: _id,
            name: name,
            email: email,
            Photo: Photo,
            number: number,
            review: reviewTxt
        }
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }



    return (
        <div>
            <form onSubmit={handleSub} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name='url' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number</span>
                    </label>
                    <input type="text" name='number' placeholder="number" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea name='review' className="textarea textarea-primary" placeholder="Bio"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className='btn btn-success' type="submit">Add Review</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;