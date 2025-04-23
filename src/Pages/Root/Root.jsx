import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet} from 'react-router';
import Footer from '../../Components/Footer/Footer';
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';

const Root = () => {
  
 
  return (
    <div>
      <Navbar></Navbar>
      <DynamicTitle></DynamicTitle>
      <div className="min-h-[calc(100vh-290px)] mx-15">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;