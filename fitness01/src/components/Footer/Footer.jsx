import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
            <div className="container mx-auto p-6 lg:py-8">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Logo Section */}
                    <div className="mb-6 lg:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/000/595/164/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg "
                                style={{ height: '100px', width: '200px' }}
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-center lg:text-left">
                        <div>
                            <h2 className="mb-4 text-sm font-bold uppercase">Resources</h2>
                            <ul className="text-sm">
                                <li className="mb-2">
                                    <Link to="/" className="hover:underline">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-bold uppercase">Follow us</h2>
                            <ul className="text-sm">
                                <li className="mb-2">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">Discord</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-bold uppercase">Legal</h2>
                            <ul className="text-sm">
                                <li className="mb-2">
                                    <Link to="#" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 opacity-30" />

                {/* Footer Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-xs">
                        © 2023 <a href="https://Gopeesingh.com/" className="hover:underline font-semibold">Gopeesingh</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:mt-0">
                        {/* Social Media Icons */}
                        <a href="#" className="hover:scale-110 transition-transform duration-200">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 8 19">
                                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform duration-200">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm3 8.75h-2.5V7.5h2.5a.5.5 0 0 0 0-1H10V5h3a.5.5 0 0 0 0-1H7.5a.5.5 0 0 0-.5.5V10H5v2h2v4.5a.5.5 0 0 0 .5.5H10v-1.5H7.5V10H10v-.75Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


