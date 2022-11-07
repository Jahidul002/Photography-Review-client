import React from 'react';
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { authContext } from './Context/ContextApi';
import { routerGoro } from './Router/Router';

const App = () => {

  return (
    <div>
      <RouterProvider router={routerGoro}></RouterProvider>
    </div>
  );
};

export default App;