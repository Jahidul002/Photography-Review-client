import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllServices from '../Compo/AllServices';
import Blog from '../Compo/Blog';
import Home from '../Compo/Home';
import LogIn from '../Compo/LogIn';
import Register from '../Compo/Register';
import Root from '../Compo/Root';
import SingleService from '../Compo/SingleService';

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
                loader: () => fetch('http://localhost:5000/data'),
                element: <AllServices></AllServices>
            },
            {
                path: 'signin',
                element: <LogIn></LogIn>
            },
            {
                path: 'signup',
                element: <Register></Register>
            },
            {
                path: 'service/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/data/${params.id}`),
                element: <SingleService></SingleService>
            }
        ]
    }
])

