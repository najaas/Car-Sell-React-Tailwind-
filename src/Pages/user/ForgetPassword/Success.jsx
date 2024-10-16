import React from 'react';
import { Link } from 'react-router-dom';

const PasswordSuccessPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100"

        style={{
        backgroundImage: `url(${'https://www.shutterstock.com/shutterstock/videos/1058607064/thumb/9.jpg?ip=x480'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 'full',
        height: 'screen',
      }}>
      <div className="bg-white p-4 rounded-lg shadow-md md:p-8">
  <div className="flex items-center justify-center mb-4 md:mb-6">
    <svg
      className="h-12 w-12 md:h-16 md:w-16 text-green-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  </div>
  <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center">
    Password Updated Successfully
  </h2>
  <p className="text-gray-700 mb-4 md:mb-6 text-center text-sm md:text-base">
    Your password has been updated. You can now log in with your new password.
  </p>
  <div className="flex justify-center">
    <Link
      to="/login"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm md:text-base"
    >
      Go to Login
    </Link>
  </div>
</div>
    </div>
  );
};

export default PasswordSuccessPage;