
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow-md sticky z-50 top-0">
            <nav className="bg-gradient-to-r from-gray-100 via-white to-gray-50 border-b border-gray-200 px-4 lg:px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/000/595/164/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg"
                            style={{ height: '80px', width: '150px' }}
                            className="mr-3"
                            alt="Logo"
                        />
                        <span className="text-xl font-bold text-orange-700">
                            FitLife
                        </span>
                    </Link>

                    {/* Action Buttons */}
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-800 hover:text-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-200"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition duration-200"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 rounded lg:rounded-none duration-200 ${
                                            isActive
                                                ? 'text-orange-700 border-b-2 border-orange-700 lg:border-none'
                                                : 'text-gray-700'
                                        } hover:text-orange-700 lg:hover:bg-transparent hover:bg-gray-50`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 rounded lg:rounded-none duration-200 ${
                                            isActive
                                                ? 'text-orange-700 border-b-2 border-orange-700 lg:border-none'
                                                : 'text-gray-700'
                                        } hover:text-orange-700 lg:hover:bg-transparent hover:bg-gray-50`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/service"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 rounded lg:rounded-none duration-200 ${
                                            isActive
                                                ? 'text-orange-700 border-b-2 border-orange-700 lg:border-none'
                                                : 'text-gray-700'
                                        } hover:text-orange-700 lg:hover:bg-transparent hover:bg-gray-50`
                                    }
                                >
                                    Service
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/gallary"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 rounded lg:rounded-none duration-200 ${
                                            isActive
                                                ? 'text-orange-700 border-b-2 border-orange-700 lg:border-none'
                                                : 'text-gray-700'
                                        } hover:text-orange-700 lg:hover:bg-transparent hover:bg-gray-50`
                                    }
                                >
                                    Gallary
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/clints"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 rounded lg:rounded-none duration-200 ${
                                            isActive
                                                ? 'text-orange-700 border-b-2 border-orange-700 lg:border-none'
                                                : 'text-gray-700'
                                        } hover:text-orange-700 lg:hover:bg-transparent hover:bg-gray-50`
                                    }
                                >
                                    Clints
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 rounded lg:rounded-none duration-200 ${
                                            isActive
                                                ? 'text-orange-700 border-b-2 border-orange-700 lg:border-none'
                                                : 'text-gray-700'
                                        } hover:text-orange-700 lg:hover:bg-transparent hover:bg-gray-50`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

