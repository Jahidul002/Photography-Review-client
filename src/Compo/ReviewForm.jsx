import React from 'react';

const ReviewForm = () => {

    const handleSub = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const review = form.review.value
        const reviewData = {
            name: name,
            email: email,
            review: review
        }
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
    }



    return (
        <div>
            <form onSubmit={handleSub} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="type name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="enter email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea className="textarea textarea-primary" name='review' placeholder="type your review here"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;