import React, { useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { RiRegisteredLine } from 'react-icons/ri';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { addBookingsData } from '../../Utilities';
import Error from '../error/Error';

const Details = () => {
  const { id } = useParams();
  const clickButton = parseInt(id);
  const lawyerData = useLoaderData();
  const clickDetails = lawyerData.find(lawyer => lawyer.id === clickButton);
   if (!clickDetails) {
     return (
       <Error></Error>
     );
  }
  useEffect(() => {
    if (clickDetails?.name) {
      document.title = clickDetails.name;
    }
  }, [clickDetails]);

const {name, image, Speciality, license_no, Fee, Availability, experience } =
    clickDetails || {};
  const handleBookings = lawyer => {
    addBookingsData(lawyer)
  }
  return (
    <>
      <div>
        {/* details card */}
        <div className="card card-border bg-gray-200 shadow-md rounded-2xl mt-5 mb-4 text-center">
          <div className="card-body">
            <h2 className="md:text-4xl text-3xl font-bold">Lawyer’s Profile Details</h2>
            <p className="w-4/5 mx-auto text-[12px]">
              Experienced and dedicated legal professional specializing in
              [practice area, e.g., family law, criminal defense, corporate
              law]. Committed to providing personalized legal solutions and
              strong representation to protect clients' rights and interests
            </p>
          </div>
        </div>
        {/* dynamic part */}
        <div className="border-1 border-gray-200 shadow-sm p-2 md:flex gap-3 md:justify-between items-center">
          <div className='flex justify-center items-center md:justify-start md:items-start'> 
            <img src={image} className='rounded-lg mb-5 w-45 md:w-60 md:h-60 lg:w-100 lg:h-100'/>
            </div>
          <div className="flex-col items-center justify-center mr-4 p-4 mb-3">
            <span className="flex md:gap-4 gap-2 items-center text-[8px] md:text-[12px]">
              <small className="bg-blue-100 px-2 py-1 md:px-3 md:py-2 rounded-xl text-blue-600 font-bold flex text-[10px] md:text-[14px]">
                {experience}+ years experience
              </small>
            </span>
            <h2 className="card-title text-lg md:text-3xl font-bold mb-3">{name}</h2>
            <div className="md:flex flex-col gap-5">
              <h1 className='font-bold mb-3'>{Speciality}</h1>
              <h1 className="flex gap-2 font-semibold items-center mb-2">
                <RiRegisteredLine />{license_no}
              </h1>
            </div>
            <h2 className='font-[sora]'>
              Availability: <br/>
              {Availability.map((available, index) => (
                <button
                  key={index}
                  className="bg-green-200 p-2 font-semibold rounded-md m-2 md:flex text-[10px] md:text-[14px]"
                >
                  {available}
                </button>
              ))}
            </h2>
            <h2 className='text-md font-semibold'>Consultation Fee: $ {Fee}</h2>
          </div>
        </div>
        {/* Booking part */}
        <div className="card card-border bg-white shadow-md rounded-2xl mt-5 mb-4">
          <div className="card-body">
            <h2 className="card-title">Book An Appointment</h2>
            <hr className="border-t-1 border-dashed border-gray-200 my-4" />
            <div className="flex md:justify-around items-center justify-evenly gap-2">
              <h3>Availability</h3>
              <button className="text-[10px] md:text-[12px] btn bg-green-100 text-green-600 px-3 rounded-xl">
                Lawyer available Today
              </button>
            </div>
            <hr className="border-t-1 border-solid border-gray-200 my-4" />
            <p className="text-orange-400 bg-orange-100 btn-active rounded-xl text-center flex items-center gap-2 justify-center text-[10px] md:text-[16px]">
              <IoAlertCircleOutline /> Due to high patient volume, we are
              currently accepting appointments for today only. We appreciate
              your understanding and cooperation.
            </p>
            <div className="card-actions justify-center">
              <Link to={'/my-bookings/'}>
                <button
                  onClick={() => handleBookings(clickDetails)}
                  className="btn btn-wide bg-[#0EA106] text-white rounded-2xl w-150"
                >
                  Book Appointment Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;