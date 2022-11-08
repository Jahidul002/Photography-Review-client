import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='btn btn-outline btn-primary  btn-xs' to="">Home</Link>
                            <Link className='btn btn-outline btn-primary  btn-xs' to="services">Services</Link>
                            <Link className='btn btn-outline btn-primary  btn-xs' to="blog">Blog</Link>
                            <Link className='btn btn-outline btn-primary  btn-xs' to="">Sign In</Link>
                            <Link className='btn btn-outline btn-primary  btn-xs' to="">Sign UP</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link className='btn btn-outline btn-primary mx-3' to="">Home</Link>
                        <Link className='btn btn-outline btn-primary mx-3' to="services">Services</Link>
                        <Link className='btn btn-outline btn-primary mx-3' to="blog">Blog</Link>
                        <Link className='btn btn-outline btn-primary mx-3' to="signin">Sign In</Link>
                        <Link className='btn btn-outline btn-primary mx-3' to="signup">Sign Up</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;