import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';
import MyBookings from '../Pages/MyBookings/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';
import Loader from '../Components/Loader/Loader';
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    hydrateFallbackElement: (
      <Suspense fallback={<Loader></Loader>}></Suspense>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
        hydrateFallbackElement: <Loader></Loader>,
        loader: () => fetch('../data.json'),
      },
      {
        path: '/details/:id',
        Component: Details,
        hydrateFallbackElement: <Loader></Loader>,
        loader: () => fetch('../data.json'),
      },
      {
        path: '/my-bookings',
        Component: MyBookings,
      },
      {
        path: '/blogs',
        hydrateFallbackElement: (
          <span className="loading loading-ball loading-xs"></span>
        ),
        loader: () => fetch('../blogs.json'),
        Component: Blogs,
      },
    ],
  },
]);

export default router;