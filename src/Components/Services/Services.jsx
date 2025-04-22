import React from 'react';
import CountUp from 'react-countup';

const Services = () => {
  return (
    <div>
      <div className="text-center mb-10 mt-15 font-[Mulish]">
        <h1 className="text-2xl font-extrabold">
          We Provide Best Law Services
        </h1>
        <p className="w-2/3 mx-auto text-[12px] m-5">
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-2 my-2 md:w-4/5 md:mx-auto">
        <div className="card shadow-md  w-32 h-32 md:w-50 md:h-50 bg-gray-200">
          <figure className="px-2 pt-2">
            <img
              src="https://i.ibb.co.com/XxT9gJT7/success-doctor.png"
              className="rounded-xl w-12 mt-4 md:w-15"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="flex text-[15px] md:text-4xl font-bold">
              <CountUp start={0} end={200} duration={15}>
                199
              </CountUp>
              +
            </h2>
            <h2 className="card-title text-[9px] md:text-sm">Total Lawyer</h2>
          </div>
        </div>
        <div className="card shadow-md  w-32 h-32 md:w-50 md:h-50 bg-gray-200">
          <figure className="px-2 pt-2">
            <img
              src="https://i.ibb.co.com/MJLPx8v/success-review.png"
              className="rounded-xl w-12 mt-4 md:w-15"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="flex text-[15px] md:text-4xl font-bold">
              <CountUp start={0} end={500} duration={20}>
                500
              </CountUp>
              +
            </h2>
            <h2 className="card-title text-[9px] md:text-sm">Total Reviews</h2>
          </div>
        </div>
        <div className="card shadow-md  w-32 h-32 md:w-50 md:h-50 bg-gray-200">
          <figure className="px-2 pt-2">
            <img
              src="https://i.ibb.co.com/XfBN3N3w/success-patients.png"
              className="rounded-xl w-12 mt-4 md:w-15"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="flex text-[15px] md:text-4xl font-bold">
              <CountUp start={0} end={3000}  duration={40}>
                3000
              </CountUp>
              +
            </h2>
            <h2 className="card-title text-[9px] md:text-sm">
              Cases Initiated
            </h2>
          </div>
        </div>
        <div className="card shadow-md  w-32 h-32 md:w-50 md:h-50 bg-gray-200">
          <figure className="px-2 pt-2">
            <img
              src="https://i.ibb.co.com/BV9WtRWt/success-staffs.png"
              className="rounded-xl w-12 mt-4 md:w-15"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="flex text-[15px] md:text-4xl font-bold">
              <CountUp start={0} end={467} duration={19}>
               467
              </CountUp>
              +
            </h2>
            <h2 className="card-title text-[9px] md:text-sm">Total Stuffs</h2>
          </div>
        </div>
      </div>
      {/* cards */}
    </div>
  );
};

export default Services;