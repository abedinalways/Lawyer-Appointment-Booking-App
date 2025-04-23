import React from 'react';

const BookingsShowcase = ({ lawyer, handleRemove }) => {
  const { id, experience, name, Speciality, Fee } =
    lawyer || {};

  return (
    <div className="border border-gray-200 rounded-4xl shadow-md p-2">
      <div className="md:flex items-center justify-around md:px-4">
        <div className='md:p-4'>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p>Speciality: {Speciality}</p>
        </div>
        <div className='md:p-4'>
          <p>Experience: {experience} years</p>
          <p>Appointment Fee: ${Fee}</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => handleRemove(id)}
          className="text-red-500 btn  rounded-2xl border-red-300"
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingsShowcase;
