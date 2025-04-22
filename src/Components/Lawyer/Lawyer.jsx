import React from 'react';
import { FaRegistered } from 'react-icons/fa';
import { Link } from 'react-router';
const Lawyer = ({ lawyer }) => {
  const { id, image, experience, name, Speciality, license_no } = lawyer || {};
  return (
    <div className="card card-side border-1 border-gray-200 shadow-sm p-2">
      <figure className="rounded-lg w-42 h-42 md:w-60 md:h-60 flex items-center mt-6 md:mt-0">
        <img src={image} />
      </figure>
      <div className="card-body">
        <span className="flex gap-5 items-center text-[8px] md:text-[12px]">
          <small className="bg-green-100 px-2 py-1  md:px-3 md:py-2 rounded-xl text-green-600 font-bold text-[10px] md:text-[14px]">
            available
          </small>
          <small className="bg-blue-100 px-2 py-1 md:px-3 md:py-2 rounded-xl text-blue-600 font-bold flex text-[10px] md:text-[14px]">
            {experience}+ years experience
          </small>
        </span>
        <h2 className="card-title text-lg  md:text-2xl font-bold">{name}</h2>
        <span className='text-md md:text-lg font-semibold'>{Speciality}</span>
        <span className="flex items-center gap-2">
          <FaRegistered /> {license_no}
        </span>
        <Link to={`/details/${id}`}>
          <button className="btn rounded-lg bg-blue-500 text-white w-25 h-5 md:w-32 md:h-8 text-[10px] md:text-[16px]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Lawyer;