import React from 'react';
import { useContext } from 'react';
import { authContext } from '../Context/ContextApi';

const Register = () => {
    const { creatUser, UpdtUserProfile } = useContext(authContext)

    const handleSub = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const url = form.url.value;
        const password = form.password.value
        console.log(email, name, password, url);

        creatUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user);
                form.reset()
                handleProfile(name, url)
            })
            .catch(err => console.error(err))
    }

    const handleProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        UpdtUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Here!</h1>
                    </div>
                    <div className="card flex-shrink-0  shadow-2xl bg-base-100">
                        <form onSubmit={handleSub} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='url' placeholder="photo link" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;