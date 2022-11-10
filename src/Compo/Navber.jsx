import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/ContextApi';
import logo from '../Utilities/assignmentLogo-1.png'


const Navber = () => {
    const { user, LogOut } = useContext(authContext)

    const handleOut = () => {
        LogOut()
            .then(() => { })
            .catch(er => console.error(er))

    }

    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='btn btn-outline btn-primary  btn-xs' to="/">Home</Link>
                            {user?.uid ? <>
                                <Link to="my-review" className='btn btn-outline btn-primary  btn-xs'>My reviews</Link>
                                <Link to="addedevent" className='btn btn-outline btn-primary  btn-xs'>My Added services</Link>
                            </> : <Link className='btn btn-outline btn-primary  btn-xs' to="services">Services</Link>

                            }
                            <Link className='btn btn-outline btn-primary  btn-xs' to="blog">Blog</Link>
                            {
                                user?.uid ? <button onClick={handleOut} className='btn btn-outline btn-primary  btn-xs' >loguot</button>
                                    :
                                    <>
                                        <Link className='btn btn-outline btn-primary  btn-xs' to="signin">Sign In</Link>
                                        <Link className='btn btn-outline btn-primary  btn-xs' to="signup">Sign UP</Link>
                                    </>
                            }
                        </ul>
                    </div>
                    <Link>
                        <img className='h-16 ' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link className='btn btn-outline btn-primary mx-3' to="/">Home</Link>
                        {user?.uid ? <>
                            <Link to="my-review" className='btn btn-outline btn-primary mx-3'>My Reviews</Link>
                            <Link to="addedevent" className='btn btn-outline btn-primary mx-3'>My Added Services</Link>
                        </> : <Link className='btn btn-outline btn-primary mx-3' to="services">Services</Link>}
                        <Link className='btn btn-outline btn-primary mx-3' to="blog">Blog</Link>
                        {
                            user?.uid ?
                                <>
                                    <button onClick={handleOut} className='btn btn-outline btn-primary mx-3' >loguot</button>
                                </> :
                                <>
                                    <Link className='btn btn-outline btn-primary mx-3' to="signin">Sign In</Link>
                                    <Link className='btn btn-outline btn-primary mx-3' to="signup">Sign UP</Link>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;