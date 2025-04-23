import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-center px-6">
        {/* <img
        src="https://tenor.com/view/error-404-404-page-not-found-file-not-found-gif-13044566016678697586"
        alt="Lost in space"
        className="w-72 md:w-96 mb-6 rounded-xl shadow-lg animate-float"
      /> */}

        <h1 className="text-[90px] md:text-[120px] font-extrabold text-indigo-600 drop-shadow-lg animate-bounce">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800">
          Page Not Found
        </p>
        <p className="text-gray-600 mt-2 max-w-md">
          Looks like you’ve drifted into uncharted territory. The page you’re
          looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300"
        >
          ⬅️ Back to Home
        </Link>

        {/* Float animation */}
        <style>
          {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
        </style>
      </div>
    </>
  );
};

export default Error;