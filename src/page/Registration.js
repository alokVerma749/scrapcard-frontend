import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        company: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(userData);
    }

    const registerUser = async (userData) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', userData, { withCredentials: true });
            if (response.status === 200) {
                toast.success('Registered and logged in', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate("/profile");
                }, 1000)
            } else {
                toast.warn('login failed', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg || 'something went wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <section className=" body-font relative">
            <ToastContainer />
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">Register</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 w-full mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-wrap flex-col md:flex-row m-2">
                        <div className="p-2 md:w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm">Name</label>
                                <input value={userData.name} onChange={(e) => setUserData({
                                    ...userData,
                                    name: e.target.value
                                })} type="text" id="name" name="name" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 md:w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm">Email</label>
                                <input value={userData.email} onChange={(e) => setUserData({
                                    ...userData,
                                    email: e.target.value
                                })} type="email" id="email" name="email" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 md:w-1/2">
                            <div className="relative">
                                <label htmlFor="company" className="leading-7 text-sm">Company</label>
                                <input value={userData.company} onChange={(e) => setUserData({
                                    ...userData,
                                    company: e.target.value
                                })} type="text" id="company" name="company" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 md:w-1/2">
                            <div className="relative">
                                <label htmlFor="password" className="leading-7 text-sm">password</label>
                                <input value={userData.password} onChange={(e) => setUserData({
                                    ...userData,
                                    password: e.target.value
                                })}
                                    type="password" id="password" name="password" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center">Already't have an account yet?
                            <Link to={'/login'} rel="noopener noreferrer" className="hover:underline text-indigo-300">Login in</Link>.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Registration