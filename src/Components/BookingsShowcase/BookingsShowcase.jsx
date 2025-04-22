import React from 'react';

const BookingsShowcase = ({ lawyer, handleRemove }) => {
  const { id, experience, name, Speciality, Fee } =
    lawyer || {};

  return (
    <div className="border border-gray-200 rounded-4xl p-2 shadow-md">
      <div className="flex items-center justify-around p-2">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p>Speciality: {Speciality}</p>
        </div>
        <div>
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
