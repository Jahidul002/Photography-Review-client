import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navber from './Navber';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;