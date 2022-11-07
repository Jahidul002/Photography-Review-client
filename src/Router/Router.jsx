import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
            }
        ]
    }
])

