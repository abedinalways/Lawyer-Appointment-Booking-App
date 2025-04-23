import React, { useEffect, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({ lawyers }) => {
  const [displayLawyers, setDisplayLawyers] = useState([]);
  const [displayAll, setDisplayAll] = useState(false);
  useEffect(() => {
    if (displayAll) {
      setDisplayLawyers(lawyers)
    }
    else {
      setDisplayLawyers(lawyers.slice(0, 6))
    }
  }, [lawyers, displayAll]);

  return (
    <>
      <div className="text-center mb-10 mt-15 font-[Mulish]">
        <h1 className="text-3xl md:text-5xl font-extrabold">Our Best Lawyers</h1>
        <p className="w-2/3 mx-auto text-[12px] md:text-lg m-5">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid justify-center md:grid-cols-2 gap-3 m-6 p-4 mx-4 ">
        {displayLawyers.map((lawyer, index) => (
          <Lawyer key={index} lawyer={lawyer}></Lawyer>
        ))}
      </div>
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={() => {
            setDisplayAll(prv => !prv);
            if (displayAll) window.scrollTo(0, 400);
          }}
          className="btn btn-active my-1 w-50 md:w-58 text-lg md:text-xl bg-[#0EA106] p-5 text-white rounded-4xl"
        >
          {displayAll ? 'Show less lawyers' : 'Show all lawyers'}
        </button>
      </div>
    </>
  );
};

export default Lawyers;