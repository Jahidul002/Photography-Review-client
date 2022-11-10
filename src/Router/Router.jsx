import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddEvent from '../Compo/AddEvent';
import AddReview from '../Compo/AddReview';
import AllServices from '../Compo/AllServices';
import Blog from '../Compo/Blog';
import Home from '../Compo/Home';
import LogIn from '../Compo/LogIn';
import MyEvent from '../Compo/MyEvent';
import Myreview from '../Compo/Myreview';
import PrivateRoute from '../Compo/PrivateRoute';
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
            },
            {
                path: 'review/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/data/${params.id}`),
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path: 'my-review',
                element: <PrivateRoute><Myreview></Myreview></PrivateRoute>
            },
            {
                path: 'eventadd',
                element: <PrivateRoute><AddEvent></AddEvent></PrivateRoute>
            },
            {
                path: 'addedevent',
                loader: () => fetch('http://localhost:5000/services'),
                element: <MyEvent></MyEvent>
            }

        ]
    }
])

