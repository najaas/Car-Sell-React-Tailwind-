import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Otppage = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value !== '' && index < 3) {
      const nextInput = document.querySelectorAll(`input[type="text"]`)[index + 1];
      nextInput.focus();
    }
  };

  return (
    <>
      <section className="bg-gray-200 min-h-screen flex justify-center items-center">
        <div className="bg-white rounded-2xl flex max-w-3xl p-5 items-center">
          <div className="flex-1 text-center px-4 py-2 m-2 flex flex-col justify-evenly h-[400px]">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Enter OTP</h2>
            <div className="flex justify-center mb-4 w-full">
              {otp.map((value, index) => (
                <input
                  key={index}
                  className="shadow appearance-none border rounded w-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleChange(e, index)}
                />
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Link to='/newpassword'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Verify
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Otppage;