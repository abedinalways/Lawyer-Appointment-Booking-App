import React from 'react';
import { TbCircleLetterR } from 'react-icons/tb';
import { Link } from 'react-router';
const Lawyer = ({ lawyer }) => {
  const { id, image, experience, name, Speciality, license_no } = lawyer || {};
  return (
    <div className="card card-side border-1 border-gray-200 shadow-sm p-2">
      <figure className="rounded-lg w-42 h-42 md:w-60 md:h-60 flex items-center mt-6 md:mt-0">
        <img src={image} />
      </figure>
      <div className="card-body">
        <span className="flex md:gap-4 gap-2 items-center text-[8px] md:text-[12px]">
          <small className="bg-green-100 px-2 py-1  md:px-3 md:py-2 rounded-xl text-green-600 font-bold">
            available
          </small>{' '}
          <small className="bg-blue-100 px-2 py-1 md:px-3 md:py-2 rounded-xl text-blue-600 font-bold flex">
            {experience}+ years experience
          </small>
        </span>
        <h2 className="card-title text-md md:text-2xl font-bold">{name}</h2>
        <span>{Speciality}</span>
        <span className="flex items-center gap-2">
          <TbCircleLetterR size={'20px'}></TbCircleLetterR> {license_no}
        </span>
        <Link to={`/details/${id}`}>
          <button className="btn btn-primary w-30 h-5 md:w-32 md:h-8">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Lawyer;