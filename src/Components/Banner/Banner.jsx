import React from 'react';

const Banner = () => {
  return (
    <div className="hero hero-overlay min-h-[550px] rounded-2xl bg-[url('https://i.ibb.co.com/pBmnQZn6/banner-img-1.png')] mt-4">
      <div className=""></div>
      <div className=" hero-content text-neutral-content text-center">
        <div className="max-w-2xl  mt-16">
          <h1 className="text-3xl font-[Mulish] font-extrabold">
            Empowering you to take control of your legal matters—connect,
            consult, and conquer with professional legal assistance.
          </h1>
          <p className="m-6 text-[10px]">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
