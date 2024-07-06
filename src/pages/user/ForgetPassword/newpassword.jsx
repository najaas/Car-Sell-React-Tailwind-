import React, { useState } from 'react';
import Forget from '../../../components/LoginForm';
import { Link } from 'react-router-dom';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform password validation and submission logic here
    if (password === confirmPassword) {
      // Passwords match, submit the new password
      console.log('New password submitted:', password);
    } else {
      // Passwords don't match, display an error message
      console.log('Passwords do not match');
    }
  };

  return (
    <>
      <Forget
        section2={
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-[#002D74]">New Password</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="password"
                name="password"
                id="password"
                placeholder="New Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <input
                className="p-2 rounded-xl border"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />

              <div className="mt-6 items-center text-gray-100">
                <hr className="border-gray-300" />
                <p className="text-center text-sm">OR</p>
              </div>
              <Link to='/success'
                className="bg-[#002D74] text-white py-2 flex justify-center rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                type="submit"
              >
                Submit
              </Link>
            </form>
          </div>
        }
        section={
          <div className="md:block hidden w-7/12 h-[500px]">
            <img
              className="rounded-2xl bg-cover w-full h-full"
              src="https://media.istockphoto.com/id/1138560072/photo/salesman-giving-new-car-keys-to-customer.jpg?b=1&s=612x612&w=0&k=20&c=1dSs59egL0yqSoPoW-HQzQF6zsPNsFHXXXXiu_3fE14="
              alt="Illustration"
            />
          </div> 
        }
      />
    </>
  );
};

export default NewPassword;