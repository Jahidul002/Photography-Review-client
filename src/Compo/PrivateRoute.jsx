import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/ContextApi';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation()

    if (loading) {
        console.log("yes found");
        return <button className="btn btn-square loading"></button>
    }

    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;