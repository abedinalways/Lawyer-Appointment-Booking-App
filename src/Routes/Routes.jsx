import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';
import MyBookings from '../Pages/MyBookings/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    hydrateFallbackElement: <span>loading.....</span>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
        hydrateFallbackElement: (
          <span className="loading loading-ring loading-md"></span>
        ),
        loader: () => fetch('../data.json'),
      },
      {
        path: '/details/:id',
        Component: Details,
        hydrateFallbackElement: <span>loading.....</span>,
        loader: () => fetch('../data.json'),
      },
      {
        path:'/my-bookings',
        Component: MyBookings,
      },
      {
        path: '/blogs',
        hydrateFallbackElement:(<span className="loading loading-ball loading-xs"></span>),   
        loader: ()=>fetch('../blogs.json'),
        Component:Blogs,
      }
    ],
  },
]);

export default router;