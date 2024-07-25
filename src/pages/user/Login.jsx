import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../Components/User/LoginForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <LoginForm
        section={
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
            <p className="text-sm mt-4 text-[#002D74]">
              If you are already a member, easily log in now.
            </p>
            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  id="togglePassword"
                  className={`bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 ${
                    passwordVisible ? "hidden" : "block"
                  }`}
                  viewBox="0 0 16 16"
                  onClick={togglePasswordVisibility}
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-eye-slash-fill absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer ${
                    passwordVisible ? "block" : "hidden"
                  }`}
                  id="togglePassword"
                  viewBox="0 0 16 16"
                  onClick={togglePasswordVisibility}
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                </svg>
              </div>
              <Link
                to="/home"
                className="bg-[#002D74] text-white flex justify-center py-4 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                type="submit"
              >
                Login
              </Link>
            </form>
            <div className="mt-6 items-center text-gray-100">
              <hr className="border-gray-300" />
              <p className="text-center text-sm">OR</p>
            <GoogleOAuthProvider clientId="368339787553-8h5aerg8c37hn5gmjktiru0f1pd5iaiq.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const decoded = jwtDecode(credentialResponse.credential);
                  console.log(decoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              
            </GoogleOAuthProvider>
            
            </div>
            
            <Link to="/forget">
              <div className="mt-10 text-sm border-b border-gray-500 py-5">
                Forget password?
              </div>
            </Link>
            <div className="mt-4 text-sm flex justify-between items-center">
              <p className="mr-3 md:mr-0">If you don't have an account..</p>
              <Link to="/signup">
                <button className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">
                  Register
                </button>
              </Link>
            </div>
          </div>
        }
        section2={
          <div className="md:block hidden w-1/2 h-full">
            <img
              className="rounded-2xl h-[450px] w-full bg-cover"
              src="https://media.gettyimages.com/id/157296754/video/woman-sitting-with-her-daughter-in-a-car-malshej-ghat-maharashtra-india.jpg?s=640x640&k=20&c=Sgijkwnnnb0uSgRmv2NiYuV7Z3LNgZFzhugZMu5fTAI="
              alt="Login visual"
            />
          </div>
        }
      />
    </>
  );
};

export default Login;
