import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const DynamicTitle = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      document.title = 'Home';
    } else if (path === '/my-bookings') {
      document.title = 'Booking';
    } else if (path === '/blogs') {
      document.title = 'Blogs';
    } else if (path.startsWith('/details')) {
      document.title = 'Lawyer Details'; // Default, to be updated inside Details
    } else {
      document.title = 'Page Not Found';
    }
  }, [location.pathname]);
  return null;
};

export default DynamicTitle;