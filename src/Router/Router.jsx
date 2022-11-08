import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllServices from '../Compo/AllServices';
import Blog from '../Compo/Blog';
import Home from '../Compo/Home';
import Root from '../Compo/Root';

export const routerGoro = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'services',
                element: <AllServices></AllServices>
            }
        ]
    }
])

