import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(userCredentials);
    }

    const loginUser = async (userData) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', userCredentials, { withCredentials: true });
            // Toasts
            if (response.status === 200) {
                toast.success('Logged in', {
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
            toast.error('something went wrong', {
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
        <div className="border flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 mx-auto">
            <ToastContainer />
            <Link to={"/profile"}>Profile Test</Link>
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm text-gray-600">Sign in to access your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm text-start">Email address</label>
                        <input value={userCredentials.email} onChange={(e) => setUserCredentials({
                            ...userCredentials,
                            email: e.target.value
                        })} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</Link>
                        </div>
                        <input value={userCredentials.password} onChange={(e) => setUserCredentials({
                            ...userCredentials,
                            password: e.target.value
                        })} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-indigo-600 text-gray-50">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
                        <Link to={'/registration'} rel="noopener noreferrer" href="#" className="hover:underline text-indigo-600">Sign up</Link>.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login;