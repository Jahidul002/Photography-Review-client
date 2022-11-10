import React from 'react';
import { useContext } from 'react';
import { authContext } from '../Context/ContextApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEvent = () => {
    const { user } = useContext(authContext)
    const handleSub = (e) => {
        e.preventDefault()
        const form = e.target
        const Catagory = form.catagory.value
        const DeviceName = form.device.value
        const Price = form.price.value
        const Email = form.email.value
        const Photo = form.url.value
        const EventDescription = form.about.value
        // console.log(Catagory, DeviceName, Photo, Price, Email, EventDescription);
        const theService = {
            catagory: Catagory,
            about: EventDescription,
            device: DeviceName,
            img: Photo,
            price: Price,
            email: Email
        }
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(theService)
        })
            .then(data => {
                console.log(data);
                toast("Successfully added event!");
            })
            .catch(er => console.error(er))
    }



    return (
        <div>
            <form onSubmit={handleSub} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Catagory</span>
                    </label>
                    <input type="text" name='catagory' placeholder="type...." className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recommand Device</span>
                    </label>
                    <input type="text" name='device' placeholder="type...." className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' placeholder="type...." className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" reaOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name='url' placeholder="photo url" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Event description</span>
                    </label>
                    <textarea name='about' className="textarea textarea-primary" placeholder="write something"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className='btn btn-success' type="submit">Add Review</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default AddEvent;