import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <section className=" body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">Register</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 w-full mx-auto">
                    <div className="flex flex-wrap flex-col md:flex-row m-2">
                        <div className="p-2 md:w-1/2">
                            <div className="relative">
                                <label for="name" className="leading-7 text-sm">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 md:w-1/2">
                            <div className="relative">
                                <label for="email" className="leading-7 text-sm">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 md:w-1/2">
                            <div className="relative">
                                <label for="name" className="leading-7 text-sm">Company</label>
                                <input type="text" id="name" name="name" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 md:w-1/2">
                            <div className="relative">
                                <label for="email" className="leading-7 text-sm">password</label>
                                <input type="email" id="email" name="email" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center">Already't have an account yet?
                            <Link to={'/login'} rel="noopener noreferrer" className="hover:underline text-indigo-300">Login in</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registration