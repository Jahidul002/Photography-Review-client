import React from 'react';
import { useContext } from 'react';
import { authContext } from '../Context/ContextApi';

const AddEvent = () => {
    const { user } = useContext(authContext)
    const handleSub = (e) => {

    }



    return (
        <div>
            <form onSubmit={handleSub} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="email" defaultValue={user?.displayName} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" readonly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name='url' placeholder="photo url" className="input input-bordered" />
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
                    <textarea name='review' className="textarea textarea-primary" placeholder="write something"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className='btn btn-success' type="submit">Add Review</button>
                </div>
            </form>
        </div>
    );
};

export default AddEvent;