import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phonenumber: '',
        password: '',
        confirmPassword: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    };

    const validatePhoneNumber = (phonenumber) => {
        const regex = /^\d{10}$/;
        return regex.test(phonenumber);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (form.password !== form.confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        if (!validatePassword(form.password)) {
            setErrorMessage('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }

        if (!validatePhoneNumber(form.phonenumber)) {
            setErrorMessage('Phone number must be 10 digits.');
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/signup", form);
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.code === 'ERR_NETWORK') {
                setErrorMessage('Network error. Please ensure the backend server is running.');
            } else {
                setErrorMessage('Error submitting form. Please try again later.');
            }
        }
    };
    return (
        <div className="h-screen bg-gray-400 dark:bg-gray-900">
            <div className="container mx-auto flex justify-center items-center h-full px-6 py-12">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div className="hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                        <img
                            src="https://img.freepik.com/premium-photo/world-classic-muscle-cars-with-this-captivating-4k-wallpaper-generated-ai_943405-949.jpg"
                            alt="Muscle Car"
                            className="object-cover h-full w-full rounded-l-lg"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleSubmit}>
                            {errorMessage && <p className="mb-4 text-xs italic text-red-500">{errorMessage}</p>}
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder="First Name"
                                        value={form.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        value={form.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="phonenumber">
                                    Phone Number
                                </label>
                                <input
                                    className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border ${errorMessage.includes('Phone number') ? 'border-red-500' : ''} rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                    id="phonenumber"
                                    name="phonenumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    value={form.phonenumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border ${errorMessage.includes('Password') || errorMessage.includes('match') ? 'border-red-500' : ''} rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="******************"
                                        value={form.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border ${errorMessage.includes('Password') || errorMessage.includes('match') ? 'border-red-500' : ''} rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="******************"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button to="/login"
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
 >
                                    Register Account
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                           
                            <div className="text-center">
                                <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800" href="./login">
                                    Already have an account? Login!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
