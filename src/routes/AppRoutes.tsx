import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
  // {
  //   path: '/about',
  //   element: <About />
  // },
  // {
  //   path: '/contact',
  //   element: <Contact />
  // }
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
